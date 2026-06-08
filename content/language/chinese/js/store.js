/* ============================================================
   store.js — shared state for the Chinese library
   Handles: spaced-repetition scheduling (SM-2 lite), saved decks,
   and small DOM/helpers. Loaded after data.js on every page.
   All state lives in your browser's localStorage.
   ============================================================ */

/* ---------- tiny helpers ---------- */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const el = (t, c, h) => { const n=document.createElement(t); if(c)n.className=c; if(h!=null)n.innerHTML=h; return n; };
const lessonObj  = id => LESSONS.find(l=>l.id===+id);
const lessonName = id => { const l=lessonObj(id); return l?`L${l.id} · ${l.zh} (${l.en})`:""; };
const shuffle = a => { const r=[...a]; for(let i=r.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[r[i],r[j]]=[r[j],r[i]];} return r; };
const stripTones = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\s'·]/g,"").toLowerCase();
const todayISO = () => new Date().toISOString();
const DAY = 86400000;

/* ---------- shared select / chip builders ---------- */
function fillLessonSelect(sel, allLabel="All lessons (11–16)"){
  sel.innerHTML = `<option value="all">${allLabel}</option>` +
    LESSONS.map(l=>`<option value="${l.id}">Lesson ${l.id} · ${l.zh}</option>`).join("");
}
function fillPosSelect(sel){
  const used=[...new Set(VOCAB.map(v=>v.pos))];
  sel.innerHTML = `<option value="all">All word types</option>` +
    used.map(p=>`<option value="${p}">${POS_LABELS[p]||p}</option>`).join("");
}
function buildLessonChips(container, onPick){
  container.innerHTML="";
  const all=el("button","ch-chip active","All");
  all.dataset.lesson="all"; container.appendChild(all);
  LESSONS.forEach(l=>{
    const c=el("button","ch-chip",`L${l.id} · <span class="hz">${l.zh}</span>`);
    c.dataset.lesson=l.id; container.appendChild(c);
  });
  container.addEventListener("click",e=>{
    const chip=e.target.closest(".ch-chip"); if(!chip)return;
    $$(".ch-chip",container).forEach(c=>c.classList.remove("active"));
    chip.classList.add("active"); onPick(chip.dataset.lesson);
  });
}

/* ============================================================
   SAVED DECKS  (custom flashcard sets)
   ============================================================ */
const DECK_KEY="zh_decks";
function getDecks(){ try{return JSON.parse(localStorage.getItem(DECK_KEY)||"[]");}catch{return[];} }
function setDecks(d){ try{localStorage.setItem(DECK_KEY,JSON.stringify(d));}catch{} }

/* ============================================================
   SPACED REPETITION  (SM-2 lite)
   Each word is keyed by its hanzi. State:
     { reps, ease, interval(days), due(ms), lapses }
   Grades: 0 again · 1 hard · 2 good · 3 easy
   ============================================================ */
const SRS_KEY="zh_srs";
function getSRS(){ try{return JSON.parse(localStorage.getItem(SRS_KEY)||"{}");}catch{return{};} }
function setSRS(s){ try{localStorage.setItem(SRS_KEY,JSON.stringify(s));}catch{} }

/* words in scope: lesson filter ("all" or id) */
function wordsInScope(lesson){
  return VOCAB.filter(w=>lesson==="all"||w.lesson===+lesson);
}

/* a card is "due" if it has a record with due<=now; "new" if no record yet */
function srsBuckets(lesson="all"){
  const srs=getSRS(); const now=Date.now();
  const scope=wordsInScope(lesson);
  const due=[], fresh=[];
  scope.forEach(w=>{
    const r=srs[w.hanzi];
    if(!r) fresh.push(w);
    else if(r.due<=now) due.push(w);
  });
  return { due, fresh, total:scope.length };
}

/* count due + new (capped) for menu badges */
function srsCounts(lesson="all", newCap=20){
  const {due,fresh}=srsBuckets(lesson);
  return { due:due.length, fresh:Math.min(fresh.length,newCap), freshTotal:fresh.length };
}

/* apply a grade to a word, persist, return the updated record */
function gradeWord(hanzi, grade){
  const srs=getSRS();
  let r=srs[hanzi]||{ reps:0, ease:2.5, interval:0, due:Date.now(), lapses:0 };
  if(grade===0){                       // Again
    r.reps=0; r.lapses++; r.ease=Math.max(1.3,r.ease-0.2); r.interval=0;
    r.due=Date.now()+10*60000;         // ~10 min
  } else {
    if(grade===1){ r.ease=Math.max(1.3,r.ease-0.15); }            // Hard
    if(grade===3){ r.ease=r.ease+0.15; }                          // Easy
    if(r.reps===0)      r.interval = grade===1?1 : grade===3?2 : 1;
    else if(r.reps===1) r.interval = grade===1?3 : grade===3?6 : 3;
    else {
      const mult = grade===1?1.2 : grade===3?r.ease*1.3 : r.ease;
      r.interval = Math.max(1, Math.round(r.interval*mult));
    }
    r.reps++; r.due=Date.now()+r.interval*DAY;
  }
  srs[hanzi]=r; setSRS(srs); return r;
}

/* human-friendly "next due in" for button hints */
function nextLabel(hanzi, grade){
  const srs=JSON.parse(JSON.stringify(getSRS()));
  let r=srs[hanzi]||{ reps:0, ease:2.5, interval:0, due:Date.now(), lapses:0 };
  if(grade===0) return "10 min";
  let interval;
  if(grade===1){ r.ease=Math.max(1.3,r.ease-0.15); }
  if(grade===3){ r.ease=r.ease+0.15; }
  if(r.reps===0)      interval = grade===1?1 : grade===3?2 : 1;
  else if(r.reps===1) interval = grade===1?3 : grade===3?6 : 3;
  else { const m=grade===1?1.2:grade===3?r.ease*1.3:r.ease; interval=Math.max(1,Math.round(r.interval*m)); }
  return interval===1?"1 day":interval+" days";
}

/* learned = has a record with interval >= 1 day and not lapsing now */
function srsStats(lesson="all"){
  const srs=getSRS(); const scope=wordsInScope(lesson);
  let learning=0, learned=0, fresh=0;
  scope.forEach(w=>{
    const r=srs[w.hanzi];
    if(!r) fresh++;
    else if(r.interval>=7) learned++;
    else learning++;
  });
  return { fresh, learning, learned, total:scope.length };
}

function resetSRS(){ localStorage.removeItem(SRS_KEY); }

/* ---------- shared topbar date ---------- */
function setTopbarDate(id="topbar-date"){
  const M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const D=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const d=new Date(); const n=$("#"+id);
  if(n) n.textContent=`${D[d.getDay()]} · ${d.getDate()} ${M[d.getMonth()].toUpperCase()} ${d.getFullYear()}`;
}

/* Question sidebar for the guided practice pages (hw6_guided-style engine).
   Builds itself from the rendered page:
     - lesson blocks:   any element with data-side="Label" (listed under "Read first")
     - section headers: .sec-eyebrow[id^="sec-"] followed by .sec-title
     - problems:        .problem[id^="p-"] with .problem-num, .problem-topic, .pstate
   Wide screens: fixed left column. Narrow screens: a "Questions" button opens it as a drawer.
   Call GuidedSidebar.refresh() after the page's score/status updates. */
(function(){
  const css = `
  .gs-side{position:fixed;left:0;top:65px;bottom:0;width:272px;overflow-y:auto;border-right:1px solid var(--border);background:var(--bg);z-index:9;padding:18px 14px 90px;font-size:.8rem;}
  .gs-side h5{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin:18px 6px 6px;font-weight:500;}
  .gs-side h5:first-child{margin-top:0;}
  .gs-side a{display:flex;gap:8px;align-items:baseline;padding:5px 8px;border-radius:7px;color:var(--text2);text-decoration:none;line-height:1.35;}
  .gs-side a:hover{background:var(--bg2);color:var(--text);}
  .gs-side a.on{background:color-mix(in oklab,var(--accent) 12%,transparent);color:var(--text);}
  .gs-side a .n{font-family:'DM Mono',monospace;font-size:.66rem;color:var(--accent);min-width:34px;flex:none;}
  .gs-side a .t{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .gs-side a .s{font-family:'DM Mono',monospace;font-size:.62rem;color:var(--text3);flex:none;}
  .gs-side a .s.done{color:#16a34a;}
  .gs-side .sec{font-weight:600;color:var(--text);}
  .gs-btn{display:none;position:fixed;right:20px;bottom:20px;z-index:300;border:1px solid var(--border);background:var(--bg2);color:var(--text);border-radius:99px;padding:10px 16px;font:500 .8rem 'DM Sans',sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.14);cursor:pointer;}
  .gs-shade{display:none;position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:350;}
  .problem,[data-side],.sec-eyebrow{scroll-margin-top:120px;}
  @media (min-width:1180px){
    body.gs-on .hero, body.gs-on .footer-note{padding-left:330px;}
    body.gs-on .main{max-width:none;margin:0;padding:0 48px 0 330px;}
    body.gs-on .main > *{max-width:1040px;}
    body.gs-on .theme-toggle{left:auto;right:20px;}
  }
  @media (max-width:1179px){
    .gs-side{display:none;top:0;z-index:400;width:min(320px,86vw);box-shadow:4px 0 24px rgba(0,0,0,.2);padding-top:20px;}
    .gs-side.open{display:block;}
    .gs-shade.open{display:block;}
    .gs-btn{display:block;}
  }
  @media print{.gs-side,.gs-btn,.gs-shade{display:none!important;}}`;
  const st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  let side, shade, btn, links=[];
  const txt=el=>el?el.textContent.replace(/\s+/g,' ').trim():'';

  function close(){ side.classList.remove('open'); shade.classList.remove('open'); }
  function build(){
    side=document.createElement('nav'); side.className='gs-side'; side.setAttribute('aria-label','Questions');
    shade=document.createElement('div'); shade.className='gs-shade'; shade.onclick=close;
    btn=document.createElement('button'); btn.className='gs-btn'; btn.textContent='☰ Questions';
    btn.onclick=()=>{ side.classList.add('open'); shade.classList.add('open'); };
    let html='';
    const lessons=[...document.querySelectorAll('[data-side]')];
    if(lessons.length){ html+='<h5>Read first</h5>'; lessons.forEach((el,i)=>{ if(!el.id) el.id='side-l'+i; html+=`<a href="#${el.id}"><span class="t">${el.dataset.side}</span></a>`; }); }
    document.querySelectorAll('.sec-eyebrow[id^="sec-"]').forEach(eb=>{
      const title=eb.nextElementSibling&&eb.nextElementSibling.classList.contains('sec-title')?txt(eb.nextElementSibling):'';
      html+=`<h5>${txt(eb)}</h5>`;
      if(title) html+=`<a href="#${eb.id}" class="sec"><span class="t">${title}</span></a>`;
      let el=eb.parentElement.nextElementSibling;
      while(el && !el.querySelector('.sec-eyebrow[id^="sec-"]')){
        if(el.classList.contains('problem')) html+=`<a href="#${el.id}" data-p="${el.id}"><span class="n">${txt(el.querySelector('.problem-num'))}</span><span class="t">${txt(el.querySelector('.problem-topic'))}</span><span class="s"></span></a>`;
        el=el.nextElementSibling;
      }
    });
    side.innerHTML=html;
    document.body.append(side,shade,btn); document.body.classList.add('gs-on');
    side.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    links=[...side.querySelectorAll('a[href^="#"]')];
    const targets=links.map(a=>document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const onScroll=()=>{ let cur=null; for(const t of targets){ if(t.getBoundingClientRect().top<160) cur=t; else break; }
      links.forEach(a=>a.classList.toggle('on',cur&&a.getAttribute('href')==='#'+cur.id));
      const on=side.querySelector('a.on'); if(on&&!side.classList.contains('open')){ const r=on.getBoundingClientRect(), sr=side.getBoundingClientRect(); if(r.top<sr.top+40||r.bottom>sr.bottom-40) on.scrollIntoView({block:'center'}); } };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
    refresh();
  }
  function refresh(){
    if(!side) return;
    side.querySelectorAll('a[data-p]').forEach(a=>{ const ps=document.querySelector('#'+a.dataset.p+' .pstate'), s=a.querySelector('.s');
      const t=txt(ps); s.textContent=t.includes('solved')?'✓':t; s.classList.toggle('done',t.includes('solved')); });
  }
  window.GuidedSidebar={refresh};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build); else build();
})();

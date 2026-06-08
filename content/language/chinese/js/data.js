/* ============================================================
   data.js — All course content for the Chinese Learning Library
   Edit THIS file to add new lessons, words, grammar, or exercises.
   Nothing else needs to change.
   ============================================================ */

/* ---------- LESSON META ----------
   Each lesson has an id, a Chinese + English title, and a theme color hint.
*/
const LESSONS = [
  { id: 11, zh: "天气与季节",   en: "Weather & Seasons",        weeks: "Week 1–2"  },
  { id: 12, zh: "打电话与日程", en: "Phone Calls & Daily Routine", weeks: "Week 3–4"  },
  { id: 13, zh: "购物与银行",   en: "Shopping & the Bank",      weeks: "Week 5–6"  },
  { id: 14, zh: "衣服与颜色",   en: "Clothes & Colors",         weeks: "Week 7–9"  },
  { id: 15, zh: "生日与礼物",   en: "Birthdays & Gifts",        weeks: "Week 11–12" },
  { id: 16, zh: "周末活动",     en: "Weekend Activities",       weeks: "Week 13–14" },
];

/* Friendly labels for parts of speech */
const POS_LABELS = {
  n:      "noun",
  v:      "verb",
  adj:    "adjective",
  adv:    "adverb",
  mw:     "measure word",
  pron:   "pronoun",
  conj:   "conjunction",
  prep:   "preposition",
  interj: "interjection",
  aux:    "auxiliary",
  part:   "particle",
  phr:    "phrase / expression",
};

/* ---------- VOCABULARY ----------
   hanzi, pinyin, pos (key from POS_LABELS), en (meaning), lesson, ex (example sentence, optional)
*/
const VOCAB = [
  /* Lesson 1 — Weather & Seasons */
  { hanzi:"天气",   pinyin:"tiānqì",     pos:"n",    en:"weather",            lesson:11, ex:"今天天气怎么样？" },
  { hanzi:"怎么样", pinyin:"zěnmeyàng",  pos:"pron", en:"how / how about",    lesson:11, ex:"北京的天气怎么样？" },
  { hanzi:"不太",   pinyin:"bú tài",     pos:"phr",  en:"not too",            lesson:11, ex:"今天不太冷。" },
  { hanzi:"风",     pinyin:"fēng",       pos:"n",    en:"wind",               lesson:11, ex:"今天有风。" },
  { hanzi:"雨",     pinyin:"yǔ",         pos:"n",    en:"rain",               lesson:11, ex:"今天下雨。" },
  { hanzi:"冷",     pinyin:"lěng",       pos:"adj",  en:"cold",               lesson:11, ex:"冬天很冷。" },
  { hanzi:"度",     pinyin:"dù",         pos:"mw",   en:"degree",             lesson:11, ex:"今天二十度。" },
  { hanzi:"晴天",   pinyin:"qíngtiān",   pos:"n",    en:"sunny / clear day",  lesson:11 },
  { hanzi:"秋天",   pinyin:"qiūtiān",    pos:"n",    en:"autumn, fall",       lesson:11, ex:"秋天比较舒服。" },
  { hanzi:"热",     pinyin:"rè",         pos:"adj",  en:"hot",                lesson:11, ex:"夏天太热了。" },
  { hanzi:"舒服",   pinyin:"shūfu",      pos:"adj",  en:"comfortable",        lesson:11 },
  { hanzi:"最",     pinyin:"zuì",        pos:"adv",  en:"most",               lesson:11, ex:"我最喜欢秋天。" },
  { hanzi:"季节",   pinyin:"jìjié",      pos:"n",    en:"season",             lesson:11, ex:"你最喜欢什么季节？" },
  { hanzi:"冬天",   pinyin:"dōngtiān",   pos:"n",    en:"winter",             lesson:11 },
  { hanzi:"比较",   pinyin:"bǐjiào",     pos:"adv",  en:"relatively, rather", lesson:11, ex:"春天比较舒服。" },
  { hanzi:"差不多", pinyin:"chàbuduō",   pos:"adv",  en:"almost, nearly",     lesson:11 },
  { hanzi:"零下",   pinyin:"língxià",    pos:"n",    en:"below zero",         lesson:11, ex:"北京冬天零下十度。" },
  { hanzi:"常常",   pinyin:"chángcháng", pos:"adv",  en:"often, usually",     lesson:11, ex:"我常常游泳。" },
  { hanzi:"下",     pinyin:"xià",        pos:"v",    en:"to fall (rain/snow)",lesson:11, ex:"冬天常常下雪。" },
  { hanzi:"雪",     pinyin:"xuě",        pos:"n",    en:"snow",               lesson:11 },
  { hanzi:"常",     pinyin:"cháng",      pos:"adv",  en:"often, usually",     lesson:11 },
  { hanzi:"喜欢",   pinyin:"xǐhuan",     pos:"v",    en:"to like",            lesson:11, ex:"我喜欢秋天。" },
  { hanzi:"夏天",   pinyin:"xiàtiān",    pos:"n",    en:"summer",             lesson:11 },
  { hanzi:"爱好",   pinyin:"àihào",      pos:"n",    en:"hobby",              lesson:11, ex:"我的爱好是游泳。" },
  { hanzi:"游泳",   pinyin:"yóuyǒng",    pos:"v",    en:"to swim",            lesson:11 },
  { hanzi:"春天",   pinyin:"chūntiān",   pos:"n",    en:"spring",             lesson:11 },

  /* Lesson 2 — Phone & Daily Routine */
  { hanzi:"喂",     pinyin:"wèi",        pos:"interj", en:"hello (on phone)", lesson:12, ex:"喂，你在干什么呢？" },
  { hanzi:"啊",     pinyin:"à",          pos:"interj", en:"ah, oh",           lesson:12 },
  { hanzi:"在",     pinyin:"zài",        pos:"adv",    en:"(action in progress); at", lesson:12, ex:"我在做作业呢。" },
  { hanzi:"干",     pinyin:"gàn",        pos:"v",      en:"to do (casual)",   lesson:12, ex:"你在干什么？" },
  { hanzi:"做",     pinyin:"zuò",        pos:"v",      en:"to do, to make",   lesson:12, ex:"做作业 / 做饭" },
  { hanzi:"作业",   pinyin:"zuòyè",      pos:"n",      en:"homework",         lesson:12 },
  { hanzi:"每",     pinyin:"měi",        pos:"pron",   en:"every, each",      lesson:12, ex:"每天都有课。" },
  { hanzi:"天",     pinyin:"tiān",       pos:"n",      en:"day",              lesson:12 },
  { hanzi:"星期三", pinyin:"xīngqīsān",  pos:"n",      en:"Wednesday",        lesson:12 },
  { hanzi:"从…到…", pinyin:"cóng…dào…",  pos:"phr",    en:"from… to…",        lesson:12, ex:"从星期一到星期五我都有课。" },
  { hanzi:"中午",   pinyin:"zhōngwǔ",    pos:"n",      en:"noon",             lesson:12 },
  { hanzi:"节",     pinyin:"jié",        pos:"mw",     en:"(for classes), a period", lesson:12, ex:"今天有四节课。" },
  { hanzi:"听写",   pinyin:"tīngxiě",    pos:"n",      en:"dictation",        lesson:12, ex:"今天有听写。" },
  { hanzi:"所以",   pinyin:"suǒyǐ",      pos:"conj",   en:"so, therefore",    lesson:12, ex:"夏天太热，所以我不喜欢。" },
  { hanzi:"酒吧",   pinyin:"jiǔbā",      pos:"n",      en:"bar",              lesson:12 },
  { hanzi:"喝",     pinyin:"hē",         pos:"v",      en:"to drink",         lesson:12, ex:"喝咖啡" },
  { hanzi:"咖啡",   pinyin:"kāfēi",      pos:"n",      en:"coffee",           lesson:12 },
  { hanzi:"书店",   pinyin:"shūdiàn",    pos:"n",      en:"bookstore",        lesson:12 },
  { hanzi:"对面",   pinyin:"duìmiàn",    pos:"n",      en:"across from, facing", lesson:12, ex:"她的房间在我的对面。" },
  { hanzi:"自己",   pinyin:"zìjǐ",       pos:"pron",   en:"oneself, by oneself", lesson:12, ex:"你自己去吧。" },
  { hanzi:"唱",     pinyin:"chàng",      pos:"v",      en:"to sing",          lesson:12, ex:"唱歌" },
  { hanzi:"歌",     pinyin:"gē",         pos:"n",      en:"song",             lesson:12 },
  { hanzi:"回",     pinyin:"huí",        pos:"v",      en:"to return, go back", lesson:12, ex:"回宿舍 / 回家" },

  /* Lesson 3 — Shopping & Bank */
  { hanzi:"还",     pinyin:"huán",       pos:"v",    en:"to return (sth)",    lesson:13, ex:"还书 / 还钱" },
  { hanzi:"先",     pinyin:"xiān",       pos:"adv",  en:"first",              lesson:13, ex:"我先上课，然后写作业。" },
  { hanzi:"银行",   pinyin:"yínháng",    pos:"n",    en:"bank",               lesson:13 },
  { hanzi:"换",     pinyin:"huàn",       pos:"v",    en:"to change, exchange",lesson:13, ex:"换钱" },
  { hanzi:"然后",   pinyin:"ránhòu",     pos:"conj", en:"then, after that",   lesson:13 },
  { hanzi:"商店",   pinyin:"shāngdiàn",  pos:"n",    en:"store, shop",        lesson:13 },
  { hanzi:"东西",   pinyin:"dōngxi",     pos:"n",    en:"thing(s)",           lesson:13, ex:"买东西 / 吃东西" },
  { hanzi:"咱们",   pinyin:"zánmen",     pos:"pron", en:"we, us (incl.)",     lesson:13, ex:"咱们一起去吧！" },
  { hanzi:"一起",   pinyin:"yìqǐ",       pos:"adv",  en:"together",           lesson:13, ex:"我们一起去商店吧。" },
  { hanzi:"关门",   pinyin:"guānmén",    pos:"phr",  en:"to close (the door)",lesson:13, ex:"关 guān = to close" },
  { hanzi:"星期天", pinyin:"xīngqītiān", pos:"n",    en:"Sunday",             lesson:13 },
  { hanzi:"打算",   pinyin:"dǎsuàn",     pos:"v",    en:"to plan to",         lesson:13, ex:"我打算去购物中心。" },
  { hanzi:"购物中心",pinyin:"gòuwù zhōngxīn", pos:"n", en:"shopping mall",    lesson:13 },
  { hanzi:"贵",     pinyin:"guì",        pos:"adj",  en:"expensive",          lesson:13, ex:"这件衣服贵不贵？" },
  { hanzi:"还可以", pinyin:"hái kěyǐ",   pos:"phr",  en:"so-so, passable, okay", lesson:13 },
  { hanzi:"非常",   pinyin:"fēicháng",   pos:"adv",  en:"very, extremely",    lesson:13, ex:"非常好" },
  { hanzi:"质量",   pinyin:"zhìliàng",   pos:"n",    en:"quality",            lesson:13, ex:"质量不错。" },
  { hanzi:"不错",   pinyin:"búcuò",      pos:"adj",  en:"pretty good, not bad", lesson:13 },
  { hanzi:"正",     pinyin:"zhèng",      pos:"adv",  en:"right now, just",    lesson:13, ex:"我正打算去商店。" },
  { hanzi:"衣服",   pinyin:"yīfu",       pos:"n",    en:"clothes",            lesson:13 },
  { hanzi:"开门",   pinyin:"kāimén",     pos:"phr",  en:"to open (the door)", lesson:13, ex:"开 kāi = to open" },

  /* Lesson 4 — Clothes & Colors */
  { hanzi:"件",     pinyin:"jiàn",       pos:"mw",   en:"(for clothing)",     lesson:14, ex:"一件毛衣" },
  { hanzi:"白",     pinyin:"bái",        pos:"adj",  en:"white",              lesson:14 },
  { hanzi:"毛衣",   pinyin:"máoyī",      pos:"n",    en:"sweater",            lesson:14 },
  { hanzi:"挺",     pinyin:"tǐng",       pos:"adv",  en:"very, quite",        lesson:14, ex:"挺好看的。" },
  { hanzi:"好看",   pinyin:"hǎokàn",     pos:"adj",  en:"good-looking, nice", lesson:14 },
  { hanzi:"容易",   pinyin:"róngyì",     pos:"adj",  en:"easy",               lesson:14, ex:"浅颜色容易脏。" },
  { hanzi:"脏",     pinyin:"zāng",       pos:"adj",  en:"dirty",              lesson:14 },
  { hanzi:"蓝",     pinyin:"lán",        pos:"adj",  en:"blue",               lesson:14 },
  { hanzi:"颜色",   pinyin:"yánsè",      pos:"n",    en:"color",              lesson:14, ex:"你喜欢什么颜色？" },
  { hanzi:"有点儿", pinyin:"yǒudiǎnr",   pos:"adv",  en:"a little (bit)",     lesson:14, ex:"这件衣服有点儿贵。" },
  { hanzi:"深",     pinyin:"shēn",       pos:"adj",  en:"dark (color), deep", lesson:14, ex:"我喜欢深颜色的。" },
  { hanzi:"浅",     pinyin:"qiǎn",       pos:"adj",  en:"light, pale, pastel",lesson:14 },
  { hanzi:"黄",     pinyin:"huáng",      pos:"adj",  en:"yellow",             lesson:14 },
  { hanzi:"漂亮",   pinyin:"piàoliang",  pos:"adj",  en:"pretty, beautiful",  lesson:14 },
  { hanzi:"它",     pinyin:"tā",         pos:"pron", en:"it",                 lesson:14 },
  { hanzi:"昨天",   pinyin:"zuótiān",    pos:"n",    en:"yesterday",          lesson:14 },
  { hanzi:"新",     pinyin:"xīn",        pos:"adj",  en:"new",                lesson:14 },
  { hanzi:"辆",     pinyin:"liàng",      pos:"mw",   en:"(for vehicles)",     lesson:14, ex:"一辆车" },
  { hanzi:"旧",     pinyin:"jiù",        pos:"adj",  en:"old, used",          lesson:14 },
  { hanzi:"便宜",   pinyin:"piányi",     pos:"adj",  en:"cheap, inexpensive", lesson:14 },
  { hanzi:"丢",     pinyin:"diū",        pos:"v",    en:"to lose, get stolen",lesson:14 },
  { hanzi:"别的",   pinyin:"biéde",      pos:"phr",  en:"another, other",     lesson:14 },
  { hanzi:"黑",     pinyin:"hēi",        pos:"adj",  en:"black",              lesson:14 },
  { hanzi:"灰",     pinyin:"huī",        pos:"adj",  en:"gray",               lesson:14 },
  { hanzi:"绿",     pinyin:"lǜ",         pos:"adj",  en:"green",              lesson:14 },

  /* Lesson 5 — Birthday & Gifts */
  { hanzi:"晚饭",   pinyin:"wǎnfàn",     pos:"n",    en:"dinner",             lesson:15 },
  { hanzi:"以后",   pinyin:"yǐhòu",      pos:"n",    en:"after, later",       lesson:15, ex:"晚饭以后" },
  { hanzi:"一直",   pinyin:"yìzhí",      pos:"adv",  en:"all along, straight",lesson:15 },
  { hanzi:"忙",     pinyin:"máng",       pos:"adj",  en:"busy",               lesson:15, ex:"他在忙着准备礼物。" },
  { hanzi:"准备",   pinyin:"zhǔnbèi",    pos:"v",    en:"to prepare",         lesson:15, ex:"准备考试" },
  { hanzi:"礼物",   pinyin:"lǐwù",       pos:"n",    en:"gift, present",      lesson:15, ex:"送礼物" },
  { hanzi:"生日",   pinyin:"shēngrì",    pos:"n",    en:"birthday",           lesson:15 },
  { hanzi:"蛋糕",   pinyin:"dàngāo",     pos:"n",    en:"cake",               lesson:15 },
  { hanzi:"送",     pinyin:"sòng",       pos:"v",    en:"to give (as a gift)",lesson:15, ex:"送花 / 送巧克力" },
  { hanzi:"说",     pinyin:"shuō",       pos:"v",    en:"to say, to speak",   lesson:15 },
  { hanzi:"特别",   pinyin:"tèbié",      pos:"adj",  en:"special",            lesson:15, ex:"这个礼物很特别。" },
  { hanzi:"男",     pinyin:"nán",        pos:"adj",  en:"male",               lesson:15 },
  { hanzi:"还是",   pinyin:"háishi",     pos:"conj", en:"or (in questions)",  lesson:15, ex:"你送花还是送巧克力？" },
  { hanzi:"女",     pinyin:"nǚ",         pos:"adj",  en:"female",             lesson:15 },
  { hanzi:"可",     pinyin:"kě",         pos:"aux",  en:"worth (doing)",      lesson:15, ex:"可买的书很多。" },
  { hanzi:"比如",   pinyin:"bǐrú",       pos:"v",    en:"for example",        lesson:15, ex:"比如饺子、米饭。" },
  { hanzi:"巧克力", pinyin:"qiǎokèlì",   pos:"n",    en:"chocolate",          lesson:15 },
  { hanzi:"甜",     pinyin:"tián",       pos:"adj",  en:"sweet",              lesson:15 },
  { hanzi:"号码",   pinyin:"hàomǎ",      pos:"n",    en:"size, number",       lesson:15 },
  { hanzi:"那么",   pinyin:"nàme",       pos:"conj", en:"then, in that case", lesson:15 },
  { hanzi:"束",     pinyin:"shù",        pos:"mw",   en:"bouquet (for flowers)", lesson:15, ex:"一束花" },
  { hanzi:"花",     pinyin:"huā",        pos:"n",    en:"flower",             lesson:15 },
  { hanzi:"主意",   pinyin:"zhǔyi",      pos:"n",    en:"idea",               lesson:15, ex:"好主意！" },

  /* Lesson 6 — Weekend Activities */
  { hanzi:"又",     pinyin:"yòu",        pos:"adv",  en:"again",              lesson:16, ex:"今天又是周末。" },
  { hanzi:"了",     pinyin:"le",         pos:"part", en:"(completed action particle)", lesson:16 },
  { hanzi:"看起来", pinyin:"kàn qǐlái",  pos:"phr",  en:"it looks like, it seems", lesson:16, ex:"看起来，今天天气不太好。" },
  { hanzi:"啦",     pinyin:"la",         pos:"part", en:"(modal particle)",   lesson:16 },
  { hanzi:"可以",   pinyin:"kěyǐ",       pos:"aux",  en:"may, can, be able to", lesson:16, ex:"周末可以睡懒觉。" },
  { hanzi:"好好儿", pinyin:"hǎohāor",    pos:"adv",  en:"all out, properly",  lesson:16, ex:"考试以前要好好儿准备。" },
  { hanzi:"觉得",   pinyin:"juéde",      pos:"v",    en:"to feel, to think",  lesson:16, ex:"我觉得这个电影没意思。" },
  { hanzi:"没意思", pinyin:"méi yìsi",   pos:"phr",  en:"boring",             lesson:16 },
  { hanzi:"电视",   pinyin:"diànshì",    pos:"n",    en:"TV, television",     lesson:16, ex:"看电视" },
  { hanzi:"上网",   pinyin:"shàng wǎng", pos:"phr",  en:"to go online",       lesson:16 },
  { hanzi:"洗",     pinyin:"xǐ",         pos:"v",    en:"to wash",            lesson:16, ex:"洗衣服 / 洗手" },
  { hanzi:"睡懒觉", pinyin:"shuì lǎnjiào",pos:"phr", en:"to sleep in",        lesson:16 },
  { hanzi:"跟",     pinyin:"gēn",        pos:"conj", en:"and; with",          lesson:16, ex:"跟朋友一起去爬山。" },
  { hanzi:"出去",   pinyin:"chūqu",      pos:"v",    en:"to go out",          lesson:16, ex:"出去玩儿" },
  { hanzi:"逛",     pinyin:"guàng",      pos:"v",    en:"to stroll, window-shop", lesson:16, ex:"逛商店 / 逛公园" },
  { hanzi:"学习",   pinyin:"xuéxí",      pos:"v",    en:"to study",           lesson:16 },
  { hanzi:"不同",   pinyin:"bùtóng",     pos:"adj",  en:"different",          lesson:16, ex:"不同的安排" },
  { hanzi:"安排",   pinyin:"ānpái",      pos:"v",    en:"to arrange; arrangement", lesson:16, ex:"你周末有什么安排？" },
  { hanzi:"上",     pinyin:"shàng",      pos:"n",    en:"last, previous",     lesson:16, ex:"上个周末 / 上个月" },
  { hanzi:"包",     pinyin:"bāo",        pos:"v",    en:"to wrap",            lesson:16, ex:"包饺子" },
  { hanzi:"饺子",   pinyin:"jiǎozi",     pos:"n",    en:"dumpling",           lesson:16 },
  { hanzi:"跳舞",   pinyin:"tiào wǔ",    pos:"v",    en:"to dance",           lesson:16 },
  { hanzi:"爬",     pinyin:"pá",         pos:"v",    en:"to climb",           lesson:16, ex:"爬山" },
  { hanzi:"山",     pinyin:"shān",       pos:"n",    en:"mountain, hill",     lesson:16 },
  { hanzi:"听",     pinyin:"tīng",       pos:"v",    en:"to listen",          lesson:16, ex:"听音乐 / 听音乐会" },
  { hanzi:"音乐会", pinyin:"yīnyuèhuì",  pos:"n",    en:"concert",            lesson:16 },
];

/* ---------- GRAMMAR ----------
   Each point: lesson, title (zh + en), pattern, explanation, examples [{zh, py, en}]
*/
const GRAMMAR = [
  {
    lesson:11, zh:"形容词的程度", en:"Degrees of adjectives",
    pattern:"最 / 很 / 比较 / 不太 + adj. ；不 + adj. + 不 + adj.",
    note:"Stack a degree adverb in front of an adjective to show how strong it is. 最 (most) > 很 (very) > 比较 (relatively) > 不太 (not too).",
    examples:[
      { zh:"我最喜欢秋天。",   py:"Wǒ zuì xǐhuan qiūtiān.",   en:"I like autumn best." },
      { zh:"夏天比较热。",     py:"Xiàtiān bǐjiào rè.",       en:"Summer is relatively hot." },
      { zh:"今天不太冷。",     py:"Jīntiān bú tài lěng.",     en:"It's not too cold today." },
    ]
  },
  {
    lesson:12, zh:"动作进行：(正)在……(呢)", en:"Ongoing action with 在",
    pattern:"S. + 在 + (Place) + V. + (呢)",
    note:"在 marks an action in progress. 呢 at the end softens the tone. 干 is the casual word for “do”.",
    examples:[
      { zh:"我在做作业呢。",       py:"Wǒ zài zuò zuòyè ne.",          en:"I'm doing homework." },
      { zh:"你在干什么呢？",       py:"Nǐ zài gàn shénme ne?",         en:"What are you doing?" },
      { zh:"她在酒吧喝咖啡。",     py:"Tā zài jiǔbā hē kāfēi.",        en:"She's drinking coffee at the bar." },
    ]
  },
  {
    lesson:12, zh:"每……都……", en:"every / each … all …",
    pattern:"每 + (天 / 个人 …) + 都 + V.",
    note:"每 means “every”; it almost always pairs with 都 before the verb.",
    examples:[
      { zh:"她每天都做作业。", py:"Tā měi tiān dōu zuò zuòyè.", en:"She does homework every day." },
      { zh:"每个人都在学习。", py:"Měi gè rén dōu zài xuéxí.",  en:"Everyone is studying." },
    ]
  },
  {
    lesson:12, zh:"从……到……", en:"from … to …",
    pattern:"从 + (start) + 到 + (end)",
    note:"Used for time or place ranges.",
    examples:[
      { zh:"从星期一到星期五我都有课。", py:"Cóng xīngqīyī dào xīngqīwǔ wǒ dōu yǒu kè.", en:"I have class from Monday to Friday." },
    ]
  },
  {
    lesson:13, zh:"连动句 S+V₁+V₂", en:"Serial-verb construction",
    pattern:"S. + V₁ (去/回 place) + V₂ (action)",
    note:"Two verbs in a row: the first is usually a movement verb, the second the purpose.",
    examples:[
      { zh:"我去商店买东西。", py:"Wǒ qù shāngdiàn mǎi dōngxi.", en:"I go to the store to buy things." },
      { zh:"他们去图书馆看书。", py:"Tāmen qù túshūguǎn kàn shū.", en:"They go to the library to read." },
    ]
  },
  {
    lesson:13, zh:"先……然后……", en:"first … then …",
    pattern:"先 + V₁ ，然后 + V₂",
    note:"Shows sequence of two actions.",
    examples:[
      { zh:"我先上课，然后写作业。", py:"Wǒ xiān shàng kè, ránhòu xiě zuòyè.", en:"I have class first, then do homework." },
    ]
  },
  {
    lesson:13, zh:"正反问 adj.不adj. / v.不v.", en:"Affirmative-negative questions",
    pattern:"V. + 不 + V.  ＝  V. + 吗？   ／   adj. + 不 + adj.  ＝  adj. + 吗？",
    note:"Repeating the verb/adjective with 不 between them makes a yes/no question — same meaning as adding 吗.",
    examples:[
      { zh:"这件衣服贵不贵？", py:"Zhè jiàn yīfu guì bu guì?", en:"Is this piece of clothing expensive?" },
      { zh:"你去不去图书馆？", py:"Nǐ qù bu qù túshūguǎn?",   en:"Are you going to the library?" },
    ]
  },
  {
    lesson:13, zh:"在 vs 正", en:"在 vs. 正 (in progress vs. right now)",
    pattern:"在 = in the process of  ／  正 = at this exact moment",
    note:"在 describes a continuous, visible action. 正 pins it to a precise moment. 在 cannot go with mental verbs like 打算.",
    examples:[
      { zh:"你打电话的时候，我正上课。", py:"Nǐ dǎ diànhuà de shíhou, wǒ zhèng shàng kè.", en:"When you called, I was right in the middle of class." },
      { zh:"我在打算去商店买衣服。✗", py:"(incorrect)", en:"在 can't be used with 打算." },
    ]
  },
  {
    lesson:14, zh:"“的”字词组 X + 的 = Noun", en:"The 的 phrase (turns X into a noun)",
    pattern:"X + 的  (X = adj. / v. / n. / pronoun)",
    note:"Adding 的 after a modifier lets it stand in for a noun, so you don't repeat the noun.",
    examples:[
      { zh:"我喜欢深颜色的。",   py:"Wǒ xǐhuan shēn yánsè de.",   en:"I like the dark-colored one." },
      { zh:"这是我买的。",       py:"Zhè shì wǒ mǎi de.",         en:"This is the one I bought." },
      { zh:"我喜欢大的。",       py:"Wǒ xǐhuan dà de.",           en:"I like the big one." },
    ]
  },
  {
    lesson:14, zh:"有点儿 + adj.", en:"有点儿 + adjective (a bit too…)",
    pattern:"有点儿 + adj.",
    note:"有点儿 means “a little” and usually carries a slightly negative feeling (too expensive, too big, etc.).",
    examples:[
      { zh:"这件衣服有点儿贵。", py:"Zhè jiàn yīfu yǒudiǎnr guì.", en:"This piece of clothing is a bit expensive." },
    ]
  },
  {
    lesson:14, zh:"挺……的", en:"挺 … 的 (quite …)",
    pattern:"挺 + adj. + 的",
    note:"A friendly, conversational way to say “quite / pretty”.",
    examples:[
      { zh:"这件毛衣挺好看的。", py:"Zhè jiàn máoyī tǐng hǎokàn de.", en:"This sweater is quite nice-looking." },
    ]
  },
  {
    lesson:15, zh:"忙：adj. 和 v.", en:"忙 as adjective and verb",
    pattern:"很/非常/比较/不太 + 忙 (adj.)  ／  忙 + n.，忙着 + V.",
    note:"忙 can be an adjective (busy) or a verb (to be busy doing). As a verb only certain fixed expressions follow it directly.",
    examples:[
      { zh:"他太忙了。",           py:"Tā tài máng le.",                 en:"He's too busy." },
      { zh:"我在忙着准备礼物呢。", py:"Wǒ zài mángzhe zhǔnbèi lǐwù ne.", en:"I'm busy preparing a gift." },
    ]
  },
  {
    lesson:15, zh:"可 + V. / 比如", en:"可 + verb (worth doing) & 比如 (for example)",
    pattern:"可 + V. （the verb is worth doing）… 比如 …",
    note:"可 + verb says something is worth doing / there's plenty to do; 比如 introduces examples.",
    examples:[
      { zh:"可吃的东西很多，比如饺子、米饭。", py:"Kě chī de dōngxi hěn duō, bǐrú jiǎozi, mǐfàn.", en:"There's a lot worth eating, like dumplings and rice." },
    ]
  },
  {
    lesson:15, zh:"还是 (选择问句)", en:"还是 — “or” in choice questions",
    pattern:"A 还是 B？",
    note:"Use 还是 (not 或者) to offer a choice in a question.",
    examples:[
      { zh:"你送花还是送巧克力？", py:"Nǐ sòng huā háishi sòng qiǎokèlì?", en:"Are you giving flowers or chocolate?" },
    ]
  },
  {
    lesson:16, zh:"又 (again)", en:"又 + verb / adjective",
    pattern:"又 + V. / adj.",
    note:"又 marks repetition of something that already happened or is a pattern.",
    examples:[
      { zh:"今天又是周末。", py:"Jīntiān yòu shì zhōumò.", en:"It's the weekend again." },
      { zh:"今天又很热。",   py:"Jīntiān yòu hěn rè.",     en:"It's hot again today." },
    ]
  },
  {
    lesson:16, zh:"看起来", en:"看起来 — it looks / seems",
    pattern:"S. + 看起来 + adj./v.  ／  看起来，+ Sentence",
    note:"Adds an impression. Put 看起来 before the comment, or at the very front for longer sentences.",
    examples:[
      { zh:"她看起来很高兴。",       py:"Tā kàn qǐlái hěn gāoxìng.",        en:"She looks happy." },
      { zh:"看起来，今天天气不太好。", py:"Kàn qǐlái, jīntiān tiānqì bú tài hǎo.", en:"It seems the weather isn't great today." },
    ]
  },
  {
    lesson:16, zh:"好好儿 + V. / 可以 + V.", en:"好好儿 (properly) & 可以 (can)",
    pattern:"好好儿 + V.  ／  可以 + V.",
    note:"好好儿 = do something well / to the fullest. 可以 = can / be allowed to.",
    examples:[
      { zh:"考试以前要好好儿准备。", py:"Kǎoshì yǐqián yào hǎohāor zhǔnbèi.", en:"Prepare properly before the exam." },
      { zh:"周末我可以睡懒觉。",     py:"Zhōumò wǒ kěyǐ shuì lǎnjiào.",       en:"On weekends I can sleep in." },
    ]
  },
  {
    lesson:16, zh:"动词重复", en:"Verb reduplication (casual)",
    pattern:"V. + V.  ／  V.V. + obj.",
    note:"Repeating a verb makes the action sound light, casual and relaxed. With one-character verbs: 看看, 逛逛; the object follows.",
    examples:[
      { zh:"周末我可以看看电视、逛逛商店。", py:"Zhōumò wǒ kěyǐ kànkan diànshì, guàngguang shāngdiàn.", en:"On weekends I can watch a bit of TV and stroll the shops." },
    ]
  },
  {
    lesson:16, zh:"有时候……有时候……", en:"sometimes … sometimes …",
    pattern:"有时候 + A，有时候 + B",
    note:"Contrasts two things you alternate between.",
    examples:[
      { zh:"有时候逛商店，有时候去图书馆学习。", py:"Yǒu shíhou guàng shāngdiàn, yǒu shíhou qù túshūguǎn xuéxí.", en:"Sometimes I shop, sometimes I go study at the library." },
    ]
  },
];

/* ---------- EXERCISES ----------
   Types mirror the teacher's exam format.
   - "fill"      : choose the right word for a blank  (options + answer index)
   - "reorder"   : put scrambled words into a correct sentence (tokens + answer order text)
   - "truefalse" : judge a sentence right/wrong, with a correction
   - "pinyin"    : type the pinyin for a character (tone marks optional)
   - "translate" : reveal-answer prompt (self check)
*/
const EXERCISES = [
  /* ---- Lesson 1 ---- */
  { lesson:11, type:"fill", q:"夏天太热，______我不喜欢夏天。", options:["所以","比较","常常"], answer:0,
    explain:"“所以” (so/therefore) gives the result of the previous clause." },
  { lesson:11, type:"fill", q:"北京冬天______十度，很冷。", options:["晴天","零下","舒服"], answer:1,
    explain:"零下 = below zero." },
  { lesson:11, type:"pinyin", q:"季节", answer:"jijie", display:"Type the pinyin for 季节 (tones optional)" },
  { lesson:11, type:"reorder", tokens:["我","最","喜欢","秋天"], answer:"我最喜欢秋天", 
    explain:"S + 最 + 喜欢 + object." },
  { lesson:11, type:"translate", q:"My favorite season is autumn, because it's relatively comfortable.",
    answer:"我最喜欢的季节是秋天，因为秋天比较舒服。" },

  /* ---- Lesson 2 ---- */
  { lesson:12, type:"fill", q:"从星期二到星期五，每天我都有四______课。", options:["节","件","辆"], answer:0,
    explain:"节 is the measure word for class periods." },
  { lesson:12, type:"fill", q:"大卫没有时间，你______去看电影吧。", options:["自己","对面","所以"], answer:0,
    explain:"自己 = by oneself." },
  { lesson:12, type:"pinyin", q:"作业", answer:"zuoye", display:"Type the pinyin for 作业 (tones optional)" },
  { lesson:12, type:"reorder", tokens:["你","在","干","什么","呢"], answer:"你在干什么呢",
    explain:"S + 在 + 干 + 什么 + 呢 — asking what someone is doing." },
  { lesson:12, type:"truefalse", q:"你在干什么吗？", correct:false, fix:"你在干什么呢？",
    explain:"A question with a question word (什么) uses 呢, not 吗." },
  { lesson:12, type:"translate", q:"From Monday to Friday I have class every day.",
    answer:"从星期一到星期五，我每天都有课。" },

  /* ---- Lesson 3 ---- */
  { lesson:13, type:"fill", q:"咱们先去银行换钱，______去商店买东西。", options:["然后","所以","比如"], answer:0,
    explain:"先……然后…… = first … then …" },
  { lesson:13, type:"fill", q:"这件衣服的质量______，我很喜欢。", options:["不错","有点儿","零下"], answer:0,
    explain:"不错 = pretty good." },
  { lesson:13, type:"reorder", tokens:["我","去","商店","买","东西"], answer:"我去商店买东西",
    explain:"Serial-verb: S + 去 + place + V + object." },
  { lesson:13, type:"truefalse", q:"这件衣服贵吗不贵？", correct:false, fix:"这件衣服贵不贵？",
    explain:"Don't mix 吗 with the V不V pattern — pick one." },
  { lesson:13, type:"pinyin", q:"购物中心", answer:"gouwuzhongxin", display:"Type the pinyin for 购物中心 (tones optional)" },
  { lesson:13, type:"translate", q:"Let's go shopping at the mall together!",
    answer:"咱们一起去购物中心买东西吧！" },

  /* ---- Lesson 4 ---- */
  { lesson:14, type:"fill", q:"浅颜色的书包容易______。", options:["脏","新","贵"], answer:0,
    explain:"容易脏 = easily gets dirty." },
  { lesson:14, type:"fill", q:"我不喜欢这件，请给我看看______的。", options:["别的","它","挺"], answer:0,
    explain:"别的 = another / a different one." },
  { lesson:14, type:"reorder", tokens:["我","喜欢","深","颜色","的"], answer:"我喜欢深颜色的",
    explain:"X + 的 stands in for the noun (书包)." },
  { lesson:14, type:"truefalse", q:"这件毛衣挺好看。", correct:false, fix:"这件毛衣挺好看的。",
    explain:"挺 … 的 needs the closing 的." },
  { lesson:14, type:"pinyin", q:"颜色", answer:"yanse", display:"Type the pinyin for 颜色 (tones optional)" },
  { lesson:14, type:"translate", q:"This sweater is a little expensive; do you have a cheaper one?",
    answer:"这件毛衣有点儿贵，你有便宜的吗？" },

  /* ---- Lesson 5 ---- */
  { lesson:15, type:"fill", q:"明天有汉语考试，可______的东西很多，比如生词、课文。", options:["准备","送","逛"], answer:0,
    explain:"可 + V (worth doing): 可准备的东西很多." },
  { lesson:15, type:"fill", q:"你的生日礼物送花______送巧克力？", options:["还是","然后","比如"], answer:0,
    explain:"还是 offers a choice in a question." },
  { lesson:15, type:"reorder", tokens:["我","在","忙着","准备","礼物","呢"], answer:"我在忙着准备礼物呢",
    explain:"忙着 + V describes being busy doing something." },
  { lesson:15, type:"fill", q:"一______花，一______蛋糕。", options:["束 / 个","个 / 束","件 / 辆"], answer:0,
    explain:"束 for bouquets of flowers, 个 for cake." },
  { lesson:15, type:"pinyin", q:"巧克力", answer:"qiaokeli", display:"Type the pinyin for 巧克力 (tones optional)" },
  { lesson:15, type:"translate", q:"Her birthday gift is quite special.",
    answer:"她的生日礼物挺特别的。" },

  /* ---- Lesson 6 ---- */
  { lesson:16, type:"fill", q:"这个电影______，我不太喜欢。", options:["没意思","好好儿","安排"], answer:0,
    explain:"没意思 = boring." },
  { lesson:16, type:"fill", q:"今天______是周末，我们又在上汉语课。", options:["又","跟","可以"], answer:0,
    explain:"又 = again (a repeated pattern)." },
  { lesson:16, type:"fill", q:"______，今天的天气不太好，可能下雨。", options:["看起来","有时候","然后"], answer:0,
    explain:"看起来 at the front = “it seems …”." },
  { lesson:16, type:"reorder", tokens:["上个周末","我","跟","朋友","一起","去","听","音乐会"], answer:"上个周末我跟朋友一起去听音乐会",
    explain:"Time + S + 跟…一起 + 去 + V + object." },
  { lesson:16, type:"truefalse", q:"周末我可以好好儿玩玩儿。", correct:true,
    explain:"Correct — 可以 + 好好儿 + reduplicated verb is natural and casual." },
  { lesson:16, type:"pinyin", q:"音乐会", answer:"yinyuehui", display:"Type the pinyin for 音乐会 (tones optional)" },
  { lesson:16, type:"translate", q:"Sometimes I shop, sometimes I go study at the library.",
    answer:"有时候我逛商店，有时候去图书馆学习。" },
];

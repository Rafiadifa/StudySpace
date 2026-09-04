/* Boya Chinese Elementary 1 — per-lesson notes.
   Vocabulary lives in boya_vocab.js (auto-extracted, all 30 lessons).
   Here: lesson titles, grammar points, and ORIGINAL practice dialogues.

   NOTE on the "text": the book's own dialogues are copyrighted and the PDF is a
   scan, so they are NOT reproduced here. Each `dialog` is an ORIGINAL practice
   conversation written from that lesson's vocabulary + grammar — extra reading
   practice. For the book's REAL text: listen on the 音频 Audio tab (playlist below)
   or open your Boya PDF.

   Audio: the playlist below covers Lessons 1–30 in order; the Audio tab opens it
   near the current lesson. For exact per-lesson links, add them to byLesson. */

window.BOYA_AUDIO = {
  playlist: "https://www.youtube.com/watch?v=efdwNLh2cSE&list=PLVbyfeT52_gMxs2ivDv9gVCwcIyPGhHh0",
  byLesson: {}   // optional exact links: { 1:"https://youtu.be/xxxx", ... }
};

/* Each lesson: cn (Chinese topic), en (English), topic (short gloss),
   grammar:[{t,p,note,eg:[[hz,py,en],...]}], dialog:{note,lines:[{sp,hz,py,en}]} */
window.BOYA_LESSONS = {
  1: {
    cn: "你好", en: "Hello", topic: "Greetings · names · 是-sentences",
    grammar: [
      { t: "是-sentences (A 是 B)", p: "Subject + 是 + Noun",
        note: "是 links a subject to what it is. Negate with 不 before 是.",
        eg: [["我是学生。","Wǒ shì xuésheng.","I am a student."],
             ["她不是老师。","Tā bú shì lǎoshī.","She is not a teacher."]] },
      { t: "吗-questions", p: "Statement + 吗？",
        note: "Turn any statement into a yes/no question by adding 吗 at the end.",
        eg: [["你是老师吗？","Nǐ shì lǎoshī ma?","Are you a teacher?"],
             ["她是留学生吗？","Tā shì liúxuéshēng ma?","Is she an international student?"]] },
      { t: "Asking a name", p: "你叫什么名字？ / 我叫…",
        note: "叫 = to be called. 您 is the polite form of 你.",
        eg: [["你叫什么名字？","Nǐ jiào shénme míngzi?","What's your name?"],
             ["我叫玛丽。","Wǒ jiào Mǎlì.","My name is Mary."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 1 words).",
      lines: [
        { sp:"A", hz:"你好！", py:"Nǐ hǎo!", en:"Hello!" },
        { sp:"B", hz:"你好！你是老师吗？", py:"Nǐ hǎo! Nǐ shì lǎoshī ma?", en:"Hello! Are you a teacher?" },
        { sp:"A", hz:"不，我是学生，是留学生。", py:"Bù, wǒ shì xuésheng, shì liúxuéshēng.", en:"No, I'm a student — an international student." },
        { sp:"B", hz:"你叫什么名字？", py:"Nǐ jiào shénme míngzi?", en:"What's your name?" },
        { sp:"A", hz:"我叫玛丽。谢谢您！", py:"Wǒ jiào Mǎlì. Xièxie nín!", en:"I'm Mary. Thank you!" },
        { sp:"B", hz:"不客气。", py:"Bú kèqi.", en:"You're welcome." }
      ] }
  },
  2: {
    cn: "认识一下", en: "Getting acquainted", topic: "Introductions · 的 · nationalities · 也/呢/很",
    grammar: [
      { t: "的 (possession / modifier)", p: "Noun/Pron + 的 + Noun",
        note: "的 links a modifier to a noun, like English 's or \"of\".",
        eg: [["我的名字","wǒ de míngzi","my name"],
             ["他的老师","tā de lǎoshī","his teacher"]] },
      { t: "Nationality: 哪国人", p: "你是哪国人？ / 我是…人",
        note: "国 = country; 人 = person. 哪 = which.",
        eg: [["你是哪国人？","Nǐ shì nǎ guó rén?","What's your nationality?"],
             ["我是美国人。","Wǒ shì Měiguó rén.","I'm American."]] },
      { t: "也 (also) & 呢 (and you?)", p: "Subject + 也 + verb  /  …，你呢？",
        note: "也 goes right before the verb. 呢 bounces the same question back.",
        eg: [["我也是学生。","Wǒ yě shì xuésheng.","I'm a student too."],
             ["我很高兴，你呢？","Wǒ hěn gāoxìng, nǐ ne?","I'm glad — and you?"]] },
      { t: "Adjective predicate with 很", p: "Subject + 很 + Adjective",
        note: "Chinese adjectives don't need 是. Use 很 as the default link (not always \"very\").",
        eg: [["我很高兴。","Wǒ hěn gāoxìng.","I'm glad."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 2 words).",
      lines: [
        { sp:"刘明", hz:"来，我介绍一下儿。这是玛丽。", py:"Lái, wǒ jièshào yíxiàr. Zhè shì Mǎlì.", en:"Come, let me introduce you. This is Mary." },
        { sp:"中村", hz:"你好！你姓什么？", py:"Nǐ hǎo! Nǐ xìng shénme?", en:"Hello! What's your surname?" },
        { sp:"玛丽", hz:"我姓玛丽。你是哪国人？", py:"Wǒ xìng Mǎlì. Nǐ shì nǎ guó rén?", en:"My surname is Mary. What's your nationality?" },
        { sp:"中村", hz:"我是日本人。你呢？", py:"Wǒ shì Rìběn rén. Nǐ ne?", en:"I'm Japanese. And you?" },
        { sp:"玛丽", hz:"我是美国人。认识你很高兴！", py:"Wǒ shì Měiguó rén. Rènshi nǐ hěn gāoxìng!", en:"I'm American. Nice to meet you!" },
        { sp:"中村", hz:"我也很高兴。", py:"Wǒ yě hěn gāoxìng.", en:"Me too." }
      ] }
  },
  3: {
    cn: "这是什么书", en: "What book is this", topic: "this/that · 谁 · 的 (nominalizer)",
    grammar: [
      { t: "这 / 那 (this / that)", p: "这/那 + (是) + Noun",
        note: "这 = this (near), 那 = that (far). Often just 这是… / 那是….",
        eg: [["这是课本。","Zhè shì kèběn.","This is a textbook."],
             ["那是词典。","Nà shì cídiǎn.","That's a dictionary."]] },
      { t: "谁 (who) & 谁的 (whose)", p: "…是谁？ / 这是谁的…？",
        note: "谁 (shéi/shuí) asks who; add 的 for \"whose\".",
        eg: [["那是谁？","Nà shì shéi?","Who is that?"],
             ["这是谁的书？","Zhè shì shéi de shū?","Whose book is this?"]] },
      { t: "的 as \"the one that…\"", p: "Modifier + 的 (noun omitted)",
        note: "的 can stand alone when the noun is understood.",
        eg: [["这是我同屋的。","Zhè shì wǒ tóngwū de.","This is my roommate's."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 3 words).",
      lines: [
        { sp:"A", hz:"这是什么书？", py:"Zhè shì shénme shū?", en:"What book is this?" },
        { sp:"B", hz:"这是汉语课本。", py:"Zhè shì Hànyǔ kèběn.", en:"It's a Chinese textbook." },
        { sp:"A", hz:"那本词典是谁的？", py:"Nà běn cídiǎn shì shéi de?", en:"Whose dictionary is that?" },
        { sp:"B", hz:"是我同屋的。他是日本人。", py:"Shì wǒ tóngwū de. Tā shì Rìběn rén.", en:"It's my roommate's. He's Japanese." },
        { sp:"A", hz:"这些杂志呢？", py:"Zhèxiē zázhì ne?", en:"And these magazines?" },
        { sp:"B", hz:"那是我朋友的。", py:"Nà shì wǒ péngyou de.", en:"Those are my friend's." }
      ] }
  },
  4: {
    cn: "图书馆在哪儿", en: "Where's the library", topic: "location 在 · 哪儿 · direction words",
    grammar: [
      { t: "在 (to be located at)", p: "Thing + 在 + Place",
        note: "在 states where something is. Question word: 哪儿 (where).",
        eg: [["图书馆在哪儿？","Túshūguǎn zài nǎr?","Where's the library?"],
             ["图书馆在那儿。","Túshūguǎn zài nàr.","The library's over there."]] },
      { t: "这儿 / 那儿 / 哪儿", p: "here / there / where",
        note: "Add 儿 to 这/那/哪 to make place words.",
        eg: [["宿舍在这儿。","Sùshè zài zhèr.","The dorm is here."]] },
      { t: "Direction words (noun + 边)", p: "…的 + 北边/左边/右边…",
        note: "边-words name a side. Often used with 在.",
        eg: [["教学楼在宿舍的北边。","Jiàoxué lóu zài sùshè de běibian.","The classroom building is north of the dorm."]] },
      { t: "Polite formulas", p: "请问… / 对不起 / 没关系",
        note: "请问 opens a polite question; 对不起 / 没关系 = sorry / no problem.",
        eg: [["请问，学校在哪儿？","Qǐngwèn, xuéxiào zài nǎr?","Excuse me, where's the school?"]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 4 words).",
      lines: [
        { sp:"玛丽", hz:"请问，图书馆在哪儿？", py:"Qǐngwèn, túshūguǎn zài nǎr?", en:"Excuse me, where's the library?" },
        { sp:"学生", hz:"在教学楼的北边。", py:"Zài jiàoxué lóu de běibian.", en:"North of the classroom building." },
        { sp:"玛丽", hz:"教学楼在哪儿？", py:"Jiàoxué lóu zài nǎr?", en:"Where's the classroom building?" },
        { sp:"学生", hz:"就在那儿，宿舍的右边。", py:"Jiù zài nàr, sùshè de yòubian.", en:"Right there, to the right of the dorm." },
        { sp:"玛丽", hz:"谢谢！", py:"Xièxie!", en:"Thanks!" },
        { sp:"学生", hz:"不用谢。", py:"Búyòng xiè.", en:"You're welcome." }
      ] }
  },
  5: {
    cn: "你是哪个系的", en: "Your major & department", topic: "有 · 是…的 · 欢迎…去",
    grammar: [
      { t: "有 (to have / there is)", p: "Subject + 有 + Object · negate 没有",
        note: "有 is negated with 没 (never 不).",
        eg: [["我有时间。","Wǒ yǒu shíjiān.","I have time."],
             ["我没有空儿。","Wǒ méiyǒu kòngr.","I have no free time."]] },
      { t: "哪个系的 (which department)", p: "你是哪个系的？ / 我是…系的",
        note: "…的 turns \"…department\" into \"the one from …\".",
        eg: [["你是哪个系的？","Nǐ shì nǎge xì de?","Which department are you in?"],
             ["我是中文系的。","Wǒ shì Zhōngwén xì de.","I'm in the Chinese department."]] },
      { t: "欢迎 + verb", p: "欢迎(你)去/来…",
        note: "A warm invitation: \"welcome to …\".",
        eg: [["欢迎你去我们系玩儿。","Huānyíng nǐ qù wǒmen xì wánr.","You're welcome to come hang out at our department."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 5 words).",
      lines: [
        { sp:"张红", hz:"你是哪个系的？", py:"Nǐ shì nǎge xì de?", en:"Which department are you in?" },
        { sp:"玛丽", hz:"我是中文系的研究生。你呢？", py:"Wǒ shì Zhōngwén xì de yánjiūshēng. Nǐ ne?", en:"I'm a grad student in Chinese. And you?" },
        { sp:"张红", hz:"我学国际关系。你有空儿吗？", py:"Wǒ xué guójì guānxi. Nǐ yǒu kòngr ma?", en:"I study international relations. Do you have any free time?" },
        { sp:"玛丽", hz:"有。什么时候？", py:"Yǒu. Shénme shíhou?", en:"Yes. When?" },
        { sp:"张红", hz:"欢迎你去我们系玩儿！", py:"Huānyíng nǐ qù wǒmen xì wánr!", en:"You're welcome to come visit our department!" }
      ] }
  },
  6: {
    cn: "现在几点", en: "What time is it", topic: "telling time · 几 · 太…了",
    grammar: [
      { t: "Telling time", p: "…点(…分) · 半 · 一刻 · 差…",
        note: "点 = o'clock, 分 = minute, 半 = half, 刻 = quarter, 差 = \"to / before\".",
        eg: [["现在八点半。","Xiànzài bā diǎn bàn.","It's 8:30 now."],
             ["差一刻九点。","Chà yí kè jiǔ diǎn.","It's a quarter to nine."]] },
      { t: "几 (how many — small numbers)", p: "几 + measure/noun",
        note: "几 asks about a small expected number, e.g. the hour.",
        eg: [["你们几点上课？","Nǐmen jǐ diǎn shàng kè?","What time do you have class?"]] },
      { t: "Time-when before the verb", p: "Subject + Time + Verb",
        note: "A point in time goes BEFORE the verb, unlike English.",
        eg: [["我们八点上课。","Wǒmen bā diǎn shàng kè.","We start class at eight."]] },
      { t: "太……了 (too…)", p: "太 + Adjective + 了",
        note: "Expresses \"too\" / an exclamation.",
        eg: [["太早了！","Tài zǎo le!","Too early!"]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 6 words).",
      lines: [
        { sp:"A", hz:"现在几点？", py:"Xiànzài jǐ diǎn?", en:"What time is it now?" },
        { sp:"B", hz:"差一刻八点。", py:"Chà yí kè bā diǎn.", en:"A quarter to eight." },
        { sp:"A", hz:"我们几点上课？", py:"Wǒmen jǐ diǎn shàng kè?", en:"What time is our class?" },
        { sp:"B", hz:"八点半。有一个讲座，早上九点开始。", py:"Bā diǎn bàn. Yǒu yí ge jiǎngzuò, zǎoshang jiǔ diǎn kāishǐ.", en:"8:30. There's a lecture too, starting at 9 a.m." },
        { sp:"A", hz:"太早了！", py:"Tài zǎo le!", en:"Too early!" },
        { sp:"B", hz:"一会儿见！", py:"Yíhuìr jiàn!", en:"See you in a bit!" }
      ] }
  },
  7: {
    cn: "明天有课吗", en: "Any class tomorrow?", topic: "有/没有 · 吧 · 可是 · time-when",
    grammar: [
      { t: "有 / 没有 + noun", p: "…有…吗？ · 没有",
        note: "Ask about having something (class, time). Answer 有 / 没有.",
        eg: [["明天你有课吗？","Míngtiān nǐ yǒu kè ma?","Do you have class tomorrow?"],
             ["下午没有课。","Xiàwǔ méiyǒu kè.","No class in the afternoon."]] },
      { t: "吧 (suggestion / let's)", p: "…吧！",
        note: "Softens a sentence into a suggestion or mild request.",
        eg: [["我们去看电影吧！","Wǒmen qù kàn diànyǐng ba!","Let's go see a movie!"]] },
      { t: "可是 (but)", p: "…，可是…",
        note: "Joins a contrast, like 但是.",
        eg: [["我想去，可是没有时间。","Wǒ xiǎng qù, kěshì méiyǒu shíjiān.","I'd like to go, but I have no time."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 7 words).",
      lines: [
        { sp:"大卫", hz:"明天上午你有课吗？", py:"Míngtiān shàngwǔ nǐ yǒu kè ma?", en:"Do you have class tomorrow morning?" },
        { sp:"玛丽", hz:"没有。有什么事吗？", py:"Méiyǒu. Yǒu shénme shì ma?", en:"No. What's up?" },
        { sp:"大卫", hz:"听说电影院有一个有名的电影，我们去看吧！", py:"Tīngshuō diànyǐngyuàn yǒu yí ge yǒumíng de diànyǐng, wǒmen qù kàn ba!", en:"I heard there's a famous movie at the cinema — let's go!" },
        { sp:"玛丽", hz:"好啊！可是我没有自行车。", py:"Hǎo a! Kěshì wǒ méiyǒu zìxíngchē.", en:"Great! But I don't have a bike." },
        { sp:"大卫", hz:"没问题，车在车棚里，钥匙给你。", py:"Méi wèntí, chē zài chēpéng lǐ, yàoshi gěi nǐ.", en:"No problem — the bike's in the shed, here's the key." },
        { sp:"玛丽", hz:"那今天晚上见！", py:"Nà jīntiān wǎnshang jiàn!", en:"See you tonight then!" }
      ] }
  },
  8: {
    cn: "怎么去校园东南", en: "Getting around campus", topic: "怎么 + verb · transport · 多少 (phone number)",
    grammar: [
      { t: "怎么 + verb (how to)", p: "怎么 + Verb？",
        note: "Asks the manner/method of doing something.",
        eg: [["去宿舍怎么走？","Qù sùshè zěnme zǒu?","How do I get to the dorm?"]] },
      { t: "Means of transport", p: "坐/骑 + vehicle + verb",
        note: "坐公共汽车 (take the bus), 骑自行车 (ride a bike). The means comes before the main verb.",
        eg: [["我骑车去，很快。","Wǒ qí chē qù, hěn kuài.","I'll bike there, it's fast."]] },
      { t: "多少 (how many/much)", p: "…是多少？",
        note: "多少 asks about larger, open numbers — e.g. a phone number.",
        eg: [["你的电话号码是多少？","Nǐ de diànhuà hàomǎ shì duōshao?","What's your phone number?"]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 8 words).",
      lines: [
        { sp:"A", hz:"周末去校园东南的书店，怎么走？", py:"Zhōumò qù xiàoyuán dōngnán de shūdiàn, zěnme zǒu?", en:"How do I get to the bookshop in the southeast of campus this weekend?" },
        { sp:"B", hz:"坐公共汽车十分钟就到。", py:"Zuò gōnggòng qìchē shí fēnzhōng jiù dào.", en:"Ten minutes by bus and you're there." },
        { sp:"A", hz:"骑自行车呢？", py:"Qí zìxíngchē ne?", en:"What about by bike?" },
        { sp:"B", hz:"骑车更快！你住几号房间？", py:"Qí chē gèng kuài! Nǐ zhù jǐ hào fángjiān?", en:"Biking's even faster! Which room do you live in?" },
        { sp:"A", hz:"东南楼三号。我的手机号码是138…，你打给我吧。", py:"Dōngnán lóu sān hào. Wǒ de shǒujī hàomǎ shì yāo-sān-bā…, nǐ dǎ gěi wǒ ba.", en:"Room 3, Southeast Building. My cell number is 138… — call me." }
      ] }
  },
  9: {
    cn: "买东西", en: "Shopping", topic: "money 块/毛 · measure words · 两 · 一共",
    grammar: [
      { t: "Money: 块 / 毛", p: "…块…毛(…分)",
        note: "块 (spoken yuan) and 毛 (1/10 yuan). 一共 = altogether.",
        eg: [["一共十二块五毛。","Yígòng shí'èr kuài wǔ máo.","12.5 yuan in total."]] },
      { t: "Measure words", p: "Number + Measure + Noun",
        note: "瓶 (bottle), 本 (books). A noun needs a measure word after a number.",
        eg: [["两瓶啤酒","liǎng píng píjiǔ","two bottles of beer"],
             ["一本书","yì běn shū","one book"]] },
      { t: "两 vs 二", p: "两 + Measure word",
        note: "Use 两 (not 二) right before a measure word.",
        eg: [["我要两瓶水。","Wǒ yào liǎng píng shuǐ.","I want two bottles of water."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 9 words).",
      lines: [
        { sp:"售货员", hz:"您要什么？", py:"Nín yào shénme?", en:"What would you like?" },
        { sp:"玛丽", hz:"师傅，我要两瓶啤酒、一瓶水。", py:"Shīfu, wǒ yào liǎng píng píjiǔ, yì píng shuǐ.", en:"Sir, I'd like two beers and a bottle of water." },
        { sp:"售货员", hz:"一共十五块。", py:"Yígòng shíwǔ kuài.", en:"Fifteen yuan altogether." },
        { sp:"玛丽", hz:"给您二十块。", py:"Gěi nín èrshí kuài.", en:"Here's twenty." },
        { sp:"售货员", hz:"找您五块零钱。", py:"Zhǎo nín wǔ kuài língqián.", en:"Five yuan change." },
        { sp:"玛丽", hz:"谢谢！", py:"Xièxie!", en:"Thanks!" }
      ] }
  },
  10: {
    cn: "我的家", en: "My family", topic: "几口人 · measure words 口/条/只 · 还",
    grammar: [
      { t: "家里有几口人", p: "…家有几口人？",
        note: "口 is the measure word for family members.",
        eg: [["你家有几口人？","Nǐ jiā yǒu jǐ kǒu rén?","How many people are in your family?"],
             ["我家有五口人。","Wǒ jiā yǒu wǔ kǒu rén.","There are five of us."]] },
      { t: "还 (also / in addition)", p: "…，还有…",
        note: "Adds one more item to a list.",
        eg: [["我们家还有一条狗。","Wǒmen jiā hái yǒu yì tiáo gǒu.","We also have a dog."]] },
      { t: "Family + 的 (often dropped)", p: "我(的)爸爸",
        note: "For close relations, 的 is usually omitted.",
        eg: [["这是我爸爸、我妈妈。","Zhè shì wǒ bàba, wǒ māma.","This is my dad and my mom."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 10 words).",
      lines: [
        { sp:"A", hz:"这是你家的照片吗？你家有几口人？", py:"Zhè shì nǐ jiā de zhàopiàn ma? Nǐ jiā yǒu jǐ kǒu rén?", en:"Is this a photo of your family? How many people are there?" },
        { sp:"B", hz:"六口人：爷爷、奶奶、爸爸、妈妈、姐姐和我。", py:"Liù kǒu rén: yéye, nǎinai, bàba, māma, jiějie hé wǒ.", en:"Six: grandpa, grandma, dad, mom, my older sister and me." },
        { sp:"A", hz:"没有弟弟妹妹吗？", py:"Méiyǒu dìdi mèimei ma?", en:"No younger siblings?" },
        { sp:"B", hz:"没有。不过我们家还有一条狗。", py:"Méiyǒu. Búguò wǒmen jiā hái yǒu yì tiáo gǒu.", en:"No. But we also have a dog." },
        { sp:"A", hz:"你们家真幸福！", py:"Nǐmen jiā zhēn xìngfú!", en:"Your family's really happy!" }
      ] }
  },
  11: {
    cn: "今天天气怎么样", en: "The weather", topic: "怎么样 · 不太 · 比较/最 · 下雨/下雪",
    grammar: [
      { t: "怎么样 (how / how about)", p: "…怎么样？",
        note: "Asks for an opinion or the state of something.",
        eg: [["今天天气怎么样？","Jīntiān tiānqì zěnmeyàng?","How's the weather today?"]] },
      { t: "不太 + adjective", p: "不太 + Adj",
        note: "\"Not too …\" — a soft negative.",
        eg: [["今天不太冷。","Jīntiān bú tài lěng.","It's not too cold today."]] },
      { t: "比较 / 最", p: "比较 + Adj · 最 + Adj",
        note: "比较 = relatively; 最 = most.",
        eg: [["秋天比较舒服，我最喜欢秋天。","Qiūtiān bǐjiào shūfu, wǒ zuì xǐhuan qiūtiān.","Autumn's quite comfortable; I like it best."]] },
      { t: "Weather verbs 下…", p: "下雨 / 下雪",
        note: "下 + rain/snow describes weather happening.",
        eg: [["外边正在下雪。","Wàibian zhèngzài xià xuě.","It's snowing outside."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 11 words).",
      lines: [
        { sp:"A", hz:"北京今天天气怎么样？", py:"Běijīng jīntiān tiānqì zěnmeyàng?", en:"How's the weather in Beijing today?" },
        { sp:"B", hz:"晴天，不太冷，很舒服。", py:"Qíngtiān, bú tài lěng, hěn shūfu.", en:"Sunny, not too cold, very comfortable." },
        { sp:"A", hz:"你最喜欢哪个季节？", py:"Nǐ zuì xǐhuan nǎge jìjié?", en:"Which season do you like best?" },
        { sp:"B", hz:"夏天，可以游泳。冬天太冷了，常常零下十几度。", py:"Xiàtiān, kěyǐ yóuyǒng. Dōngtiān tài lěng le, chángcháng língxià shí jǐ dù.", en:"Summer — I can swim. Winter's too cold, often more than ten below." },
        { sp:"A", hz:"那春天呢？", py:"Nà chūntiān ne?", en:"And spring?" },
        { sp:"B", hz:"春天比较舒服，可是常常刮风。", py:"Chūntiān bǐjiào shūfu, kěshì chángcháng guā fēng.", en:"Spring's fairly nice, but it's often windy." }
      ] }
  },
  12: {
    cn: "你在干什么", en: "What are you doing", topic: "(正)在 + verb · 从…到… · 每天 · 所以",
    grammar: [
      { t: "(正)在 + verb (progressive)", p: "(正)在 + Verb (呢)",
        note: "Describes an action in progress right now.",
        eg: [["你在干什么？","Nǐ zài gàn shénme?","What are you doing?"],
             ["我正在做作业。","Wǒ zhèngzài zuò zuòyè.","I'm doing homework."]] },
      { t: "从……到…… (from … to …)", p: "从 A 到 B",
        note: "Spans a range of time or place.",
        eg: [["从星期一到星期五都有课。","Cóng xīngqīyī dào xīngqīwǔ dōu yǒu kè.","There's class from Monday to Friday."]] },
      { t: "所以 (so / therefore)", p: "(因为)…，所以…",
        note: "Introduces a result.",
        eg: [["今天没课，所以我在书店。","Jīntiān méi kè, suǒyǐ wǒ zài shūdiàn.","No class today, so I'm at the bookshop."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 12 words).",
      lines: [
        { sp:"A", hz:"喂，你在干什么呢？", py:"Wéi, nǐ zài gàn shénme ne?", en:"Hey, what are you doing?" },
        { sp:"B", hz:"我正在做作业。你呢？", py:"Wǒ zhèngzài zuò zuòyè. Nǐ ne?", en:"I'm doing homework. You?" },
        { sp:"A", hz:"我在书店对面的咖啡馆喝咖啡。", py:"Wǒ zài shūdiàn duìmiàn de kāfēiguǎn hē kāfēi.", en:"I'm having coffee at the café across from the bookshop." },
        { sp:"B", hz:"这个星期我每天从早到晚都有课，太忙了。", py:"Zhège xīngqī wǒ měi tiān cóng zǎo dào wǎn dōu yǒu kè, tài máng le.", en:"I have class from morning to night every day this week — so busy." },
        { sp:"A", hz:"那你做完作业再来吧。", py:"Nà nǐ zuò wán zuòyè zài lái ba.", en:"Then come over after you finish your homework." }
      ] }
  },
  13: {
    cn: "一起去购物", en: "Shopping together", topic: "先…然后… · 打算 · 咱们 · 一起",
    grammar: [
      { t: "先……然后…… (first … then …)", p: "先 V1，然后 V2",
        note: "Orders two actions in sequence.",
        eg: [["先去银行，然后去商店。","Xiān qù yínháng, ránhòu qù shāngdiàn.","First to the bank, then to the store."]] },
      { t: "打算 + verb (plan to)", p: "打算 + Verb",
        note: "States an intention/plan.",
        eg: [["星期天我打算去购物中心。","Xīngqītiān wǒ dǎsuàn qù gòuwù zhōngxīn.","On Sunday I plan to go to the mall."]] },
      { t: "咱们 / 一起", p: "咱们(一起) + Verb",
        note: "咱们 = inclusive \"we\" (you + me). 一起 = together.",
        eg: [["咱们一起去吧！","Zánmen yìqǐ qù ba!","Let's go together!"]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 13 words).",
      lines: [
        { sp:"A", hz:"星期天你有什么打算？", py:"Xīngqītiān nǐ yǒu shénme dǎsuàn?", en:"Any plans for Sunday?" },
        { sp:"B", hz:"我想先去银行换钱，然后去购物中心。", py:"Wǒ xiǎng xiān qù yínháng huàn qián, ránhòu qù gòuwù zhōngxīn.", en:"I want to change money at the bank first, then hit the mall." },
        { sp:"A", hz:"咱们一起去吧！", py:"Zánmen yìqǐ qù ba!", en:"Let's go together!" },
        { sp:"B", hz:"好。那儿的东西贵吗？", py:"Hǎo. Nàr de dōngxi guì ma?", en:"Sure. Is stuff there expensive?" },
        { sp:"A", hz:"还可以，质量不错。可是星期天早上关门晚。", py:"Hái kěyǐ, zhìliàng búcuò. Kěshì xīngqītiān zǎoshang kāimén wǎn.", en:"It's OK, good quality. But on Sunday it opens late." }
      ] }
  },
  14: {
    cn: "买衣服", en: "Buying clothes", topic: "挺…的 · 有点儿 + adj · colors · measure 件/辆",
    grammar: [
      { t: "挺……的 (quite)", p: "挺 + Adj + 的",
        note: "A mild \"quite / pretty\".",
        eg: [["这件毛衣挺好看的。","Zhè jiàn máoyī tǐng hǎokàn de.","This sweater's quite nice."]] },
      { t: "有点儿 + adjective", p: "有点儿 + Adj",
        note: "\"A bit …\", usually about something unwanted.",
        eg: [["这件有点儿贵。","Zhè jiàn yǒudiǎnr guì.","This one's a bit pricey."]] },
      { t: "Measure words 件 / 辆", p: "一件衣服 · 一辆自行车",
        note: "件 for clothing, 辆 for vehicles.",
        eg: [["我买了一件新毛衣。","Wǒ mǎi le yí jiàn xīn máoyī.","I bought a new sweater."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 14 words).",
      lines: [
        { sp:"售货员", hz:"这件白毛衣挺好看的，您试试？", py:"Zhè jiàn bái máoyī tǐng hǎokàn de, nín shìshi?", en:"This white sweater's quite nice — want to try it?" },
        { sp:"玛丽", hz:"白色容易脏。有别的颜色吗？", py:"Báisè róngyì zāng. Yǒu biéde yánsè ma?", en:"White gets dirty easily. Any other colors?" },
        { sp:"售货员", hz:"有蓝的、绿的。这件深蓝的怎么样？", py:"Yǒu lán de, lǜ de. Zhè jiàn shēnlán de zěnmeyàng?", en:"We have blue and green. How about this dark blue one?" },
        { sp:"玛丽", hz:"很漂亮！可是有点儿贵。", py:"Hěn piàoliang! Kěshì yǒudiǎnr guì.", en:"Very pretty! But a bit expensive." },
        { sp:"售货员", hz:"这件旧一点儿的便宜。", py:"Zhè jiàn jiù yìdiǎnr de piányi.", en:"This slightly older one is cheaper." }
      ] }
  },
  15: {
    cn: "生日礼物", en: "A birthday present", topic: "还是 (or) · 送 · 以后 · 特别",
    grammar: [
      { t: "还是 (or, in questions)", p: "A 还是 B？",
        note: "Offers a choice in a question (vs 或者 in statements).",
        eg: [["送花还是送巧克力？","Sòng huā háishi sòng qiǎokèlì?","Give flowers or chocolate?"]] },
      { t: "送 (give as a gift)", p: "送 + 人 + 礼物",
        note: "Double object: give someone something.",
        eg: [["我想送她一束花。","Wǒ xiǎng sòng tā yí shù huā.","I want to give her a bouquet."]] },
      { t: "以后 (after / later)", p: "…以后",
        note: "Marks a later time; 晚饭以后 = after dinner.",
        eg: [["晚饭以后我们去买蛋糕。","Wǎnfàn yǐhòu wǒmen qù mǎi dàngāo.","After dinner we'll go buy a cake."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 15 words).",
      lines: [
        { sp:"A", hz:"明天是玛丽的生日，送她什么礼物好？", py:"Míngtiān shì Mǎlì de shēngrì, sòng tā shénme lǐwù hǎo?", en:"Tomorrow's Mary's birthday — what should we give her?" },
        { sp:"B", hz:"送花还是送巧克力？", py:"Sòng huā háishi sòng qiǎokèlì?", en:"Flowers or chocolate?" },
        { sp:"A", hz:"她特别喜欢甜的，比如巧克力。", py:"Tā tèbié xǐhuan tián de, bǐrú qiǎokèlì.", en:"She really likes sweet things, like chocolate." },
        { sp:"B", hz:"那我们送一个蛋糕和一束花，怎么样？", py:"Nà wǒmen sòng yí ge dàngāo hé yí shù huā, zěnmeyàng?", en:"Then let's give a cake and a bouquet — OK?" },
        { sp:"A", hz:"好主意！晚饭以后一起去买。", py:"Hǎo zhǔyi! Wǎnfàn yǐhòu yìqǐ qù mǎi.", en:"Good idea! We'll buy them together after dinner." }
      ] }
  },
  16: {
    cn: "周末的安排", en: "Weekend plans", topic: "了 (new situation) · 觉得 · 好好儿 · 可以",
    grammar: [
      { t: "了 (a new situation)", p: "…了",
        note: "Signals a change or that something now holds.",
        eg: [["周末到了，我想好好儿休息。","Zhōumò dào le, wǒ xiǎng hǎohāor xiūxi.","The weekend's here — I want a good rest."]] },
      { t: "觉得 (think / feel)", p: "…觉得 + opinion",
        note: "Introduces an opinion.",
        eg: [["我觉得睡懒觉没意思。","Wǒ juéde shuì lǎnjiào méi yìsi.","I think sleeping in is boring."]] },
      { t: "好好儿 + verb", p: "好好儿 + Verb",
        note: "\"…properly / to the full\".",
        eg: [["周末好好儿玩儿吧！","Zhōumò hǎohāor wánr ba!","Have a proper good time this weekend!"]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 16 words).",
      lines: [
        { sp:"A", hz:"周末到了！你有什么安排？", py:"Zhōumò dào le! Nǐ yǒu shénme ānpái?", en:"The weekend's here! Any plans?" },
        { sp:"B", hz:"我想睡懒觉，看看电视。", py:"Wǒ xiǎng shuì lǎnjiào, kànkan diànshì.", en:"I want to sleep in and watch some TV." },
        { sp:"A", hz:"在家看电视太没意思了！咱们出去逛逛吧。", py:"Zài jiā kàn diànshì tài méi yìsi le! Zánmen chūqu guàngguang ba.", en:"Watching TV at home is so dull! Let's go out." },
        { sp:"B", hz:"也可以。晚上我们包饺子，怎么样？", py:"Yě kěyǐ. Wǎnshang wǒmen bāo jiǎozi, zěnmeyàng?", en:"Sure. And tonight let's make dumplings, OK?" },
        { sp:"A", hz:"好！我觉得这个周末安排得不错。", py:"Hǎo! Wǒ juéde zhège zhōumò ānpái de búcuò.", en:"Great! I think this weekend's shaping up nicely." }
      ] }
  },
  17: {
    cn: "做客", en: "Being a guest", topic: "请 + verb · 一点儿 · 会 · transport 打车/地铁",
    grammar: [
      { t: "请 + verb (polite)", p: "请 + Verb",
        note: "Invites the listener to do something politely.",
        eg: [["请进！请坐！","Qǐng jìn! Qǐng zuò!","Come in! Have a seat!"]] },
      { t: "会 (can / know how / likely)", p: "会 + Verb",
        note: "Learned ability, or likelihood.",
        eg: [["你会包饺子吗？","Nǐ huì bāo jiǎozi ma?","Do you know how to make dumplings?"]] },
      { t: "Transport with 打/坐", p: "打车 · 坐地铁 · 坐大巴",
        note: "打车 = take a taxi; 坐 + subway/bus.",
        eg: [["我坐地铁来的，不太挤。","Wǒ zuò dìtiě lái de, bú tài jǐ.","I came by subway — not too crowded."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 17 words).",
      lines: [
        { sp:"主人", hz:"请进，请进！快坐。", py:"Qǐng jìn, qǐng jìn! Kuài zuò.", en:"Come in, come in! Have a seat." },
        { sp:"客人", hz:"你家真干净！这是一点儿小心意，请收下。", py:"Nǐ jiā zhēn gānjìng! Zhè shì yìdiǎnr xiǎo xīnyì, qǐng shōu xià.", en:"Your home's so tidy! Here's a little something, please take it." },
        { sp:"主人", hz:"你太客气了！喝茶还是喝果汁？", py:"Nǐ tài kèqi le! Hē chá háishi hē guǒzhī?", en:"You shouldn't have! Tea or juice?" },
        { sp:"客人", hz:"随便，都行。", py:"Suíbiàn, dōu xíng.", en:"Either's fine." },
        { sp:"主人", hz:"路上顺利吗？", py:"Lùshang shùnlì ma?", en:"Was the trip smooth?" },
        { sp:"客人", hz:"我打车来的，很快。", py:"Wǒ dǎ chē lái de, hěn kuài.", en:"I took a taxi — it was quick." }
      ] }
  },
  18: {
    cn: "南方和北方的饮食", en: "Northern & southern food", topic: "对…来说 · 如果…的话 · 得(děi) · 种",
    grammar: [
      { t: "对……来说 (as for / for …)", p: "对 + 人/事 + 来说",
        note: "Frames something from someone's viewpoint.",
        eg: [["对北方人来说，面食很重要。","Duì běifāng rén lái shuō, miànshí hěn zhòngyào.","For northerners, wheat-based food is important."]] },
      { t: "如果……的话 (if …)", p: "如果 … 的话，…",
        note: "Marks a condition; 的话 closes the clause.",
        eg: [["如果太麻烦的话，就买速冻的。","Rúguǒ tài máfan de huà, jiù mǎi sùdòng de.","If it's too much trouble, just buy the frozen kind."]] },
      { t: "得 děi (must / need to)", p: "得 + Verb",
        note: "Necessity. (Different word from the degree marker 得 de.)",
        eg: [["包饺子得花不少时间。","Bāo jiǎozi děi huā bù shǎo shíjiān.","Making dumplings takes quite a bit of time."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 18 words).",
      lines: [
        { sp:"A", hz:"北方人和南方人吃的一样吗？", py:"Běifāng rén hé nánfāng rén chī de yíyàng ma?", en:"Do northerners and southerners eat the same things?" },
        { sp:"B", hz:"不一样。对南方人来说，米饭最重要。", py:"Bù yíyàng. Duì nánfāng rén lái shuō, mǐfàn zuì zhòngyào.", en:"No. For southerners, rice matters most." },
        { sp:"A", hz:"过节的时候北方人吃什么？", py:"Guò jié de shíhou běifāng rén chī shénme?", en:"What do northerners eat during festivals?" },
        { sp:"B", hz:"包饺子。可是自己包很麻烦，得花很长时间。", py:"Bāo jiǎozi. Kěshì zìjǐ bāo hěn máfan, děi huā hěn cháng shíjiān.", en:"Dumplings. But making them yourself is a hassle — takes a long time." },
        { sp:"A", hz:"如果太麻烦的话，去超市买一袋速冻的吧。", py:"Rúguǒ tài máfan de huà, qù chāoshì mǎi yí dài sùdòng de ba.", en:"If it's too much trouble, buy a bag of frozen ones at the supermarket." }
      ] }
  },
  19: {
    cn: "我的作息", en: "Daily routine", topic: "已经…了 · 才 vs 就 · 刚 · 多 + adj (age)",
    grammar: [
      { t: "已经……了 (already)", p: "已经 + … + 了",
        note: "Something has already happened.",
        eg: [["已经十二点了，你怎么才起床？","Yǐjīng shí'èr diǎn le, nǐ zěnme cái qǐ chuáng?","It's already noon — why are you only getting up now?"]] },
      { t: "才 (not until / only then)", p: "…才 + Verb",
        note: "Later/less than expected (contrast with 就 = sooner).",
        eg: [["他夜里两点才睡。","Tā yèlǐ liǎng diǎn cái shuì.","He doesn't sleep until 2 a.m."]] },
      { t: "多 + adjective (how …)", p: "多 + 大/长…",
        note: "Asks a degree; 多大 asks age.",
        eg: [["你今年多大年纪？","Nǐ jīnnián duō dà niánjì?","How old are you this year?"]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 19 words).",
      lines: [
        { sp:"A", hz:"已经中午了，你怎么才起床？", py:"Yǐjīng zhōngwǔ le, nǐ zěnme cái qǐ chuáng?", en:"It's already noon — why are you only getting up now?" },
        { sp:"B", hz:"不好意思，我夜里两点才睡。", py:"Bù hǎoyìsi, wǒ yèlǐ liǎng diǎn cái shuì.", en:"Sorry — I didn't go to bed until 2 a.m." },
        { sp:"A", hz:"这个毛病得改。早睡早起对身体好。", py:"Zhège máobìng děi gǎi. Zǎo shuì zǎo qǐ duì shēntǐ hǎo.", en:"You should fix that habit. Early to bed and rise is good for you." },
        { sp:"B", hz:"你说得对。我已经习惯了，改起来大概不容易。", py:"Nǐ shuō de duì. Wǒ yǐjīng xíguàn le, gǎi qǐlai dàgài bù róngyì.", en:"You're right. I'm used to it now, so changing won't be easy." }
      ] }
  },
  20: {
    cn: "去看朋友", en: "Visiting a friend", topic: "…死了 · 别 + verb · 对了 · health words",
    grammar: [
      { t: "……死了 (extremely)", p: "Adj + 死了",
        note: "Colloquial \"…to death\" = extremely.",
        eg: [["最近考试多，我累死了。","Zuìjìn kǎoshì duō, wǒ lèi sǐ le.","So many exams lately — I'm exhausted."]] },
      { t: "别 + verb (don't)", p: "别 + Verb",
        note: "A negative command/request.",
        eg: [["别客气，多吃点儿。","Bié kèqi, duō chī diǎnr.","Don't be shy, eat more."]] },
      { t: "对了 (by the way)", p: "对了，…",
        note: "Signals a sudden reminder/topic change.",
        eg: [["对了，医生同意他明天出院。","Duì le, yīshēng tóngyì tā míngtiān chū yuàn.","By the way, the doctor agreed he can leave tomorrow."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 20 words).",
      lines: [
        { sp:"A", hz:"听说小王住院了，我们去医院看看他吧。", py:"Tīngshuō Xiǎo Wáng zhù yuàn le, wǒmen qù yīyuàn kànkan tā ba.", en:"I heard Xiao Wang's in the hospital — let's go visit him." },
        { sp:"B", hz:"好。他身体怎么样？", py:"Hǎo. Tā shēntǐ zěnmeyàng?", en:"Sure. How's he doing?" },
        { sp:"A", hz:"医生说没什么大问题，就是太累了。", py:"Yīshēng shuō méi shénme dà wèntí, jiùshì tài lèi le.", en:"The doctor says nothing serious, just overtired." },
        { sp:"B", hz:"我们给他带点儿炒菜和面条儿吧。", py:"Wǒmen gěi tā dài diǎnr chǎocài hé miàntiáor ba.", en:"Let's bring him some stir-fry and noodles." },
        { sp:"A", hz:"对了，别忘了买点儿水果。", py:"Duì le, bié wàng le mǎi diǎnr shuǐguǒ.", en:"Oh, and don't forget to buy some fruit." }
      ] }
  },
  21: {
    cn: "喝酒", en: "Drinking", topic: "有的…有的… · adj/verb + 地 · 好像 · 帮",
    grammar: [
      { t: "有的……有的…… (some … some …)", p: "有的 + …，有的 + …",
        note: "Splits a group into parts.",
        eg: [["有的人喝白酒，有的人喝啤酒。","Yǒude rén hē báijiǔ, yǒude rén hē píjiǔ.","Some drink spirits, some drink beer."]] },
      { t: "地 (adverbial marker)", p: "Adj + 地 + Verb",
        note: "Turns a description into how an action is done.",
        eg: [["他们不停地劝酒。","Tāmen bù tíng de quàn jiǔ.","They kept urging people to drink."]] },
      { t: "好像 (seem)", p: "好像 + …",
        note: "\"Seems like / apparently\".",
        eg: [["他脸色不好，好像喝醉了。","Tā liǎnsè bù hǎo, hǎoxiàng hē zuì le.","He looks pale — seems he's drunk."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 21 words).",
      lines: [
        { sp:"A", hz:"昨天的饭局怎么样？", py:"Zuótiān de fànjú zěnmeyàng?", en:"How was yesterday's dinner?" },
        { sp:"B", hz:"别提了。大家很热情，不停地劝酒。", py:"Bié tí le. Dàjiā hěn rèqíng, bù tíng de quàn jiǔ.", en:"Ugh. Everyone was so eager, kept pushing drinks." },
        { sp:"A", hz:"你喝多了吗？", py:"Nǐ hē duō le ma?", en:"Did you drink too much?" },
        { sp:"B", hz:"有的人喝白酒，有的人喝啤酒。我头疼死了，好像有点儿醉。", py:"Yǒude rén hē báijiǔ, yǒude rén hē píjiǔ. Wǒ tóu téng sǐ le, hǎoxiàng yǒudiǎnr zuì.", en:"Some had spirits, some beer. My head's killing me — I think I'm a bit drunk." },
        { sp:"A", hz:"我帮你倒杯水，喝点儿水好一点儿。", py:"Wǒ bāng nǐ dào bēi shuǐ, hē diǎnr shuǐ hǎo yìdiǎnr.", en:"Let me pour you some water — it'll help." }
      ] }
  },
  22: {
    cn: "请假条", en: "A sick-leave note", topic: "能 · 最好 · illness words · writing a 请假条",
    grammar: [
      { t: "能 (can — ability / possibility)", p: "能 + Verb",
        note: "Physical ability or circumstance allowing something.",
        eg: [["我感冒了，明天不能来上课。","Wǒ gǎnmào le, míngtiān bù néng lái shàng kè.","I've caught a cold and can't come to class tomorrow."]] },
      { t: "最好 (had better)", p: "最好 + Verb",
        note: "A gentle recommendation.",
        eg: [["你最好去看病，好好儿休息。","Nǐ zuìhǎo qù kàn bìng, hǎohāor xiūxi.","You'd better see a doctor and rest well."]] },
      { t: "请假条 (a leave note)", p: "老师：… 请假 …，希望批准。",
        note: "State who, why, how long, and 希望批准 (hope it's approved).",
        eg: [["王老师：我发烧了，请假一天，希望批准。","Wáng lǎoshī: wǒ fā shāo le, qǐng jià yì tiān, xīwàng pīzhǔn.","Ms. Wang: I have a fever, requesting one day's leave; please approve."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 22 words).",
      lines: [
        { sp:"玛丽", hz:"老师，我感冒了，头疼、发烧，还咳嗽。", py:"Lǎoshī, wǒ gǎnmào le, tóu téng, fā shāo, hái késou.", en:"Teacher, I've caught a cold — headache, fever, and a cough." },
        { sp:"老师", hz:"你看病了吗？", py:"Nǐ kàn bìng le ma?", en:"Have you seen a doctor?" },
        { sp:"玛丽", hz:"看了，医生给我打了针。我明天能请假吗？", py:"Kàn le, yīshēng gěi wǒ dǎ le zhēn. Wǒ míngtiān néng qǐng jià ma?", en:"Yes, the doctor gave me a shot. May I take leave tomorrow?" },
        { sp:"老师", hz:"可以。你最好写一张请假条。", py:"Kěyǐ. Nǐ zuìhǎo xiě yì zhāng qǐngjiàtiáo.", en:"Yes. You'd better write a leave note." },
        { sp:"玛丽", hz:"好，我回去就写，希望您批准。", py:"Hǎo, wǒ huíqu jiù xiě, xīwàng nín pīzhǔn.", en:"OK, I'll write it when I'm back — hope you approve." }
      ] }
  },
  23: {
    cn: "迟到", en: "Running late", topic: "所以 · duration after verb · 那么 + adj · 着急",
    grammar: [
      { t: "Duration after the verb", p: "Verb + (了) + duration",
        note: "How long an action lasts goes AFTER the verb.",
        eg: [["我等了一个小时。","Wǒ děng le yí ge xiǎoshí.","I waited for an hour."]] },
      { t: "那么 + adjective (so …)", p: "那么 + Adj",
        note: "\"That / so …\" — a high degree.",
        eg: [["今天路上那么堵！","Jīntiān lùshang nàme dǔ!","Traffic was so bad today!"]] },
      { t: "着急 (anxious / in a hurry)", p: "(很)着急",
        note: "Describes worry about time.",
        eg: [["我很着急，可是没办法。","Wǒ hěn zháojí, kěshì méi bànfǎ.","I was anxious, but there was nothing to do."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 23 words).",
      lines: [
        { sp:"老师", hz:"你怎么又迟到了？", py:"Nǐ zěnme yòu chídào le?", en:"Why are you late again?" },
        { sp:"大卫", hz:"真倒霉！路上堵车，我等了半个小时的车。", py:"Zhēn dǎoméi! Lùshang dǔ chē, wǒ děng le bàn ge xiǎoshí de chē.", en:"So unlucky! Traffic jam — I waited half an hour for the bus." },
        { sp:"老师", hz:"平时没有那么堵吧？", py:"Píngshí méiyǒu nàme dǔ ba?", en:"It's not usually that jammed, is it?" },
        { sp:"大卫", hz:"平时半个钟头就到了。我很着急，可是没办法。", py:"Píngshí bàn ge zhōngtóu jiù dào le. Wǒ hěn zháojí, kěshì méi bànfǎ.", en:"Usually it's half an hour. I was anxious, but couldn't help it." },
        { sp:"老师", hz:"下次早点儿出来。", py:"Xià cì zǎo diǎnr chūlai.", en:"Leave earlier next time." }
      ] }
  },
  24: {
    cn: "聚会", en: "A get-together", topic: "祝… · 放心 · 门口见面 · verb-object phrases",
    grammar: [
      { t: "祝 + good wish", p: "祝 + 人 + wish",
        note: "Offers a wish/blessing.",
        eg: [["祝你生日快乐！","Zhù nǐ shēngrì kuàilè!","Happy birthday!"]] },
      { t: "放心 (rest assured)", p: "(你)放心",
        note: "Reassures someone.",
        eg: [["你放心，我一定去。","Nǐ fàng xīn, wǒ yídìng qù.","Don't worry, I'll definitely come."]] },
      { t: "Verb-object activities", p: "打球 · 上网 · 聊天儿 · 唱卡拉OK",
        note: "Many activities are verb + object; keep them together.",
        eg: [["晚上我们去唱卡拉OK。","Wǎnshang wǒmen qù chàng kǎlā'ōukèi.","Tonight we'll go sing karaoke."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 24 words).",
      lines: [
        { sp:"A", hz:"周末我们在食堂开个聚会，你来吗？", py:"Zhōumò wǒmen zài shítáng kāi ge jùhuì, nǐ lái ma?", en:"We're having a party at the canteen this weekend — coming?" },
        { sp:"B", hz:"当然来！有什么活动？", py:"Dāngrán lái! Yǒu shénme huódòng?", en:"Of course! What's happening?" },
        { sp:"A", hz:"先吃饭，然后唱卡拉OK。", py:"Xiān chī fàn, ránhòu chàng kǎlā'ōukèi.", en:"First eat, then sing karaoke." },
        { sp:"B", hz:"太好了！几点、在哪儿见面？", py:"Tài hǎo le! Jǐ diǎn, zài nǎr jiànmiàn?", en:"Great! What time and where do we meet?" },
        { sp:"A", hz:"六点在食堂门口。你放心，我等你。", py:"Liù diǎn zài shítáng ménkǒu. Nǐ fàng xīn, wǒ děng nǐ.", en:"Six, at the canteen entrance. Don't worry, I'll wait for you." }
      ] }
  },
  25: {
    cn: "锻炼身体", en: "Exercise & fitness", topic: "这么 + adj · 参加/报名 · 重新 · 忘(了)",
    grammar: [
      { t: "这么 + adjective (so …)", p: "这么 + Adj",
        note: "\"This / so …\" pointing at what's present.",
        eg: [["早上空气这么新鲜！","Zǎoshang kōngqì zhème xīnxiān!","The morning air is so fresh!"]] },
      { t: "参加 / 报名", p: "参加 + 活动 · 报名",
        note: "参加 = take part in; 报名 = sign up.",
        eg: [["我想参加太极拳班，怎么报名？","Wǒ xiǎng cānjiā tàijíquán bān, zěnme bàomíng?","I want to join the taiji class — how do I sign up?"]] },
      { t: "重新 + verb (anew)", p: "重新 + Verb",
        note: "Do something over again.",
        eg: [["忘了带闹钟，只好重新买一个。","Wàng le dài nàozhōng, zhǐhǎo chóngxīn mǎi yí ge.","I forgot my alarm clock, so I had to buy a new one."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 25 words).",
      lines: [
        { sp:"A", hz:"你每天早上都跑步吗？", py:"Nǐ měi tiān zǎoshang dōu pǎo bù ma?", en:"Do you run every morning?" },
        { sp:"B", hz:"对，湖边空气这么新鲜，跑完出一身汗，很舒服。", py:"Duì, hú biān kōngqì zhème xīnxiān, pǎo wán chū yì shēn hàn, hěn shūfu.", en:"Yes — the air by the lake is so fresh; after a run I'm all sweaty and it feels great." },
        { sp:"A", hz:"我也想锻炼。你参加了什么班吗？", py:"Wǒ yě xiǎng duànliàn. Nǐ cānjiā le shénme bān ma?", en:"I want to exercise too. Did you join any class?" },
        { sp:"B", hz:"我报名了太极拳班。你也来吧！", py:"Wǒ bàomíng le tàijíquán bān. Nǐ yě lái ba!", en:"I signed up for the taiji class. Come along!" },
        { sp:"A", hz:"好，我明天就去报名。", py:"Hǎo, wǒ míngtiān jiù qù bàomíng.", en:"OK, I'll go sign up tomorrow." }
      ] }
  },
  26: {
    cn: "快放假了", en: "Vacation is coming", topic: "快(要)…了 · 决定 · 只好 · 寄 (post office)",
    grammar: [
      { t: "快(要)……了 (about to)", p: "快要 + … + 了 / 快 … 了",
        note: "An event is imminent.",
        eg: [["快要放假了，你有什么打算？","Kuàiyào fàng jià le, nǐ yǒu shénme dǎsuàn?","Vacation's almost here — any plans?"]] },
      { t: "决定 + verb (decide)", p: "决定 + Verb",
        note: "States a decision.",
        eg: [["我决定去旅行。","Wǒ juédìng qù lǚxíng.","I've decided to travel."]] },
      { t: "只好 (have no choice but)", p: "只好 + Verb",
        note: "The only option left.",
        eg: [["邮局人太多，只好排队。","Yóujú rén tài duō, zhǐhǎo pái duì.","The post office was packed, so I had to queue."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 26 words).",
      lines: [
        { sp:"A", hz:"快要放假了，你决定去哪儿？", py:"Kuàiyào fàng jià le, nǐ juédìng qù nǎr?", en:"Vacation's almost here — decided where to go?" },
        { sp:"B", hz:"我打算去旅行，可能圣诞节出发。", py:"Wǒ dǎsuàn qù lǚxíng, kěnéng Shèngdàn Jié chūfā.", en:"I plan to travel, probably leaving around Christmas." },
        { sp:"A", hz:"你今天怎么去邮局了？", py:"Nǐ jīntiān zěnme qù yóujú le?", en:"Why'd you go to the post office today?" },
        { sp:"B", hz:"给亲戚寄新年贺卡。人太多，只好排了整整半天队。", py:"Gěi qīnqi jì xīnnián hèkǎ. Rén tài duō, zhǐhǎo pái le zhěngzhěng bàntiān duì.", en:"To mail New Year cards to relatives. So crowded I had to queue for ages." },
        { sp:"A", hz:"真辛苦！", py:"Zhēn xīnkǔ!", en:"What a pain!" }
      ] }
  },
  27: {
    cn: "假期计划", en: "Holiday plans", topic: "…极了 · 对…感兴趣 · 让 · 应该",
    grammar: [
      { t: "……极了 (extremely)", p: "Adj + 极了",
        note: "A strong \"extremely\", placed after the adjective.",
        eg: [["那儿的风景美极了！","Nàr de fēngjǐng měi jí le!","The scenery there is gorgeous!"]] },
      { t: "对……感兴趣 (interested in)", p: "对 + N + 感兴趣",
        note: "Expresses interest in something.",
        eg: [["我对古代历史感兴趣。","Wǒ duì gǔdài lìshǐ gǎn xìngqù.","I'm interested in ancient history."]] },
      { t: "让 (make / let someone)", p: "让 + 人 + Verb",
        note: "One person causes another to do something.",
        eg: [["妈妈让我抓紧复习。","Māma ràng wǒ zhuājǐn fùxí.","Mom told me to hurry up and review."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 27 words).",
      lines: [
        { sp:"张大朋", hz:"假期你有什么计划？", py:"Jiàqī nǐ yǒu shénme jìhuà?", en:"What are your plans for the break?" },
        { sp:"玛丽", hz:"我想去哈尔滨，听说那儿的风景美极了。", py:"Wǒ xiǎng qù Hā'ěrbīn, tīngshuō nàr de fēngjǐng měi jí le.", en:"I want to go to Harbin — I hear the scenery's stunning." },
        { sp:"张大朋", hz:"你不复习功课吗？", py:"Nǐ bù fùxí gōngkè ma?", en:"Aren't you going to review your coursework?" },
        { sp:"玛丽", hz:"会的。我对中国古代历史特别感兴趣，想多待几天。", py:"Huì de. Wǒ duì Zhōngguó gǔdài lìshǐ tèbié gǎn xìngqù, xiǎng duō dāi jǐ tiān.", en:"I will. I'm really into ancient Chinese history, so I want to stay a few extra days." },
        { sp:"张大朋", hz:"那你应该抓紧时间，别忘了准备考试。", py:"Nà nǐ yīnggāi zhuājǐn shíjiān, bié wàng le zhǔnbèi kǎoshì.", en:"Then you should use your time well and not forget to prep for exams." }
      ] }
  },
  28: {
    cn: "考试", en: "Exams", topic: "verb + 完 · degree 得 · 为什么 · measure 道",
    grammar: [
      { t: "Verb + 完 (finish)", p: "Verb + 完 (了)",
        note: "A result complement: the action is completed.",
        eg: [["我终于考完了。","Wǒ zhōngyú kǎo wán le.","I've finally finished my exams."]] },
      { t: "得 de (degree complement)", p: "Verb + 得 + Adj",
        note: "Says how well/fast an action is done. (Different from 得 děi = must.)",
        eg: [["这次我考得不错。","Zhè cì wǒ kǎo de búcuò.","I did pretty well this time."]] },
      { t: "为什么 (why)", p: "为什么 + …？",
        note: "Asks a reason.",
        eg: [["你为什么这么担心？","Nǐ wèishénme zhème dānxīn?","Why are you so worried?"]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 28 words).",
      lines: [
        { sp:"A", hz:"考完了吗？考得怎么样？", py:"Kǎo wán le ma? Kǎo de zěnmeyàng?", en:"All done? How'd it go?" },
        { sp:"B", hz:"阅读还行，可是汉字写得太慢，有几道题没做完。", py:"Yuèdú hái xíng, kěshì Hànzì xiě de tài màn, yǒu jǐ dào tí méi zuò wán.", en:"Reading was OK, but I wrote characters too slowly and didn't finish a few questions." },
        { sp:"A", hz:"你为什么这么紧张？放松点儿。", py:"Nǐ wèishénme zhème jǐnzhāng? Fàngsōng diǎnr.", en:"Why so tense? Relax." },
        { sp:"B", hz:"我担心记汉字的方法不对。", py:"Wǒ dānxīn jì Hànzì de fāngfǎ bú duì.", en:"I'm worried my way of memorizing characters is wrong." },
        { sp:"A", hz:"也许编个故事记，效果会好一点儿。", py:"Yěxǔ biān ge gùshi jì, xiàoguǒ huì hǎo yìdiǎnr.", en:"Maybe make up a story to remember them — it might work better." }
      ] }
  },
  29: {
    cn: "买火车票", en: "Buying a train ticket", topic: "measure 张 · 终于 · 另外 · 别提了",
    grammar: [
      { t: "Measure word 张", p: "…张 + 票/…",
        note: "张 for tickets and flat things.",
        eg: [["我要两张卧铺票。","Wǒ yào liǎng zhāng wòpù piào.","I want two sleeper tickets."]] },
      { t: "终于 (finally)", p: "终于 + Verb",
        note: "At last, after effort/waiting.",
        eg: [["排了很久，终于买到票了。","Pái le hěn jiǔ, zhōngyú mǎi dào piào le.","After a long queue, I finally got the tickets."]] },
      { t: "另外 (besides / another)", p: "另外 + …",
        note: "Introduces an additional item.",
        eg: [["另外，再买一张硬座的。","Lìngwài, zài mǎi yì zhāng yìngzuò de.","Also, buy one more hard-seat ticket."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 29 words).",
      lines: [
        { sp:"玛丽", hz:"我想买一张去哈尔滨的火车票。", py:"Wǒ xiǎng mǎi yì zhāng qù Hā'ěrbīn de huǒchē piào.", en:"I'd like a train ticket to Harbin." },
        { sp:"售票员", hz:"卧铺还是硬座？", py:"Wòpù háishi yìngzuò?", en:"Sleeper or hard seat?" },
        { sp:"玛丽", hz:"卧铺。有吗？", py:"Wòpù. Yǒu ma?", en:"Sleeper. Any left?" },
        { sp:"售票员", hz:"糟糕，卧铺全部卖完了。", py:"Zāogāo, wòpù quánbù mài wán le.", en:"Oh no — sleepers are all sold out." },
        { sp:"玛丽", hz:"那……硬座也行吧。", py:"Nà… yìngzuò yě xíng ba.", en:"Then… a hard seat is fine, I guess." },
        { sp:"售票员", hz:"好，给你一张。另外提醒你，火车晚上八点开。", py:"Hǎo, gěi nǐ yì zhāng. Lìngwài tíxǐng nǐ, huǒchē wǎnshang bā diǎn kāi.", en:"OK, here's one. Also, a heads-up: the train leaves at 8 p.m." }
      ] }
  },
  30: {
    cn: "联欢会", en: "The farewell party", topic: "measure 首 · potential 听得懂 · 熟悉 · packing",
    grammar: [
      { t: "Measure word 首", p: "…首 + 歌",
        note: "首 counts songs/poems.",
        eg: [["我想唱一首中文流行歌曲。","Wǒ xiǎng chàng yì shǒu Zhōngwén liúxíng gēqǔ.","I'd like to sing a Chinese pop song."]] },
      { t: "Potential complement 得/不 + result", p: "Verb + 得/不 + 懂/…",
        note: "Whether an action can achieve its result: 听得懂 (can understand), 听不懂.",
        eg: [["歌词我基本听得懂。","Gēcí wǒ jīběn tīng de dǒng.","I can basically follow the lyrics."]] },
      { t: "熟悉 (familiar with)", p: "对…熟悉 / 熟悉 + N",
        note: "Know something well.",
        eg: [["这首民歌我很熟悉。","Zhè shǒu míngē wǒ hěn shúxi.","I know this folk song well."]] }
    ],
    dialog: { note: "Original practice dialogue (Lesson 30 words).",
      lines: [
        { sp:"A", hz:"明天的联欢会你表演什么节目？", py:"Míngtiān de liánhuānhuì nǐ biǎoyǎn shénme jiémù?", en:"What will you perform at tomorrow's party?" },
        { sp:"B", hz:"我想唱一首中文民歌，可是怕发音不标准。", py:"Wǒ xiǎng chàng yì shǒu Zhōngwén míngē, kěshì pà fāyīn bù biāozhǔn.", en:"I want to sing a Chinese folk song, but I'm afraid my pronunciation isn't standard." },
        { sp:"A", hz:"没关系，歌词你熟悉吗？", py:"Méi guānxi, gēcí nǐ shúxi ma?", en:"It's fine — do you know the lyrics well?" },
        { sp:"B", hz:"很熟悉，基本听得懂，也唱得下来。", py:"Hěn shúxi, jīběn tīng de dǒng, yě chàng de xiàlai.", en:"Very well — I basically understand them and can sing it through." },
        { sp:"A", hz:"那你别怕。唱完我们就收拾行李回家。", py:"Nà nǐ bié pà. Chàng wán wǒmen jiù shōushi xíngli huí jiā.", en:"Then don't worry. After you sing, we'll pack up and head home." }
      ] }
  }
};

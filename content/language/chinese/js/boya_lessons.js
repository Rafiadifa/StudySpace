/* Boya Chinese Elementary 1 — per-lesson notes.
   Vocabulary lives in boya_vocab.js (auto-extracted, all 30 lessons).
   Here: lesson titles, grammar points, and ORIGINAL practice dialogues.

   NOTE on the "text": the book's own dialogues are copyrighted and the PDF is a
   scan, so they are NOT reproduced here. Each `dialog` is an ORIGINAL, longer
   practice conversation written from that lesson's vocabulary + grammar — extra
   reading practice, not a copy of the book's wording. For the book's REAL text:
   listen on the 音频 Audio tab (playlist below) or open your Boya PDF.

   Audio: the playlist below covers Lessons 1–30 in order; the Audio tab opens it
   near the current lesson. For exact per-lesson links, add them to byLesson. */

window.BOYA_AUDIO = {
  playlist: "https://www.youtube.com/watch?v=efdwNLh2cSE&list=PLVbyfeT52_gMxs2ivDv9gVCwcIyPGhHh0",
  byLesson: {}   // optional exact links: { 1:"https://youtu.be/xxxx", ... }
};

/* Book page map — for jumping to a lesson in your own PDF (nothing copied; these
   are just the page numbers from the book's 目录/contents).
   `pages` = the PRINTED page each lesson starts on. The PDF file's page index is
   printed + pdfOffset (front matter). `titles` = the book's official chapter titles,
   used for the chapter menu so it matches your PDF and the audio.
   The "open at page" button only works when the site is opened locally (file://),
   since the PDF is kept off the public site. */
window.BOYA_BOOK = {
  pdf: "../../../Chinese_Material/Boya Chinese Elementary 1 - Second Edition .pdf",
  pdfOffset: 16,     // PDF page = printed page + 16
  lastEnd: 198,      // last body page of Lesson 30 (课文译文 starts p.199)
  pages: { 1:11, 2:18, 3:22, 4:28, 5:35, 6:41, 7:47, 8:54, 9:61, 10:67,
           11:73, 12:80, 13:87, 14:94, 15:100, 16:106, 17:112, 18:119, 19:126, 20:133,
           21:139, 22:144, 23:150, 24:156, 25:162, 26:169, 27:175, 28:181, 29:187, 30:193 },
  titles: {
    1:["你好","Hello"],
    2:["你是哪国人","What's your nationality?"],
    3:["那是你的书吗","Is that your book?"],
    4:["图书馆在哪儿","Where's the library?"],
    5:["在北京大学的东边","East of Peking University"],
    6:["现在几点","What time is it now?"],
    7:["明天你有课吗","Do you have class tomorrow?"],
    8:["你的电话号码是多少","What's your phone number?"],
    9:["多少钱一瓶","How much for a bottle?"],
    10:["你家有几口人","How many are in your family?"],
    11:["北京的冬天比较冷","Beijing winters are rather cold"],
    12:["你在干什么呢","What are you doing?"],
    13:["我去图书馆借书","I'm off to borrow books"],
    14:["我喜欢浅颜色的","I like the light-colored one"],
    15:["明天是我朋友的生日","Tomorrow is my friend's birthday"],
    16:["周末你干什么","What do you do on weekends?"],
    17:["做客（一）","Being a guest (1)"],
    18:["做客（二）","Being a guest (2)"],
    19:["现在习惯了","I'm used to it now"],
    20:["看病人","Visiting a patient"],
    21:["我喝了半斤白酒","I drank half a jin of baijiu"],
    22:["他感冒了","He's caught a cold"],
    23:["你学了多长时间汉语","How long have you studied Chinese?"],
    24:["你吃了早饭来找我","Come find me after breakfast"],
    25:["你得多锻炼锻炼了","You should exercise more"],
    26:["快考试了","Exams are almost here"],
    27:["爸爸妈妈让我回家","My parents want me to come home"],
    28:["考得怎么样","How did the exam go?"],
    29:["我们已经买好票了","We've already bought the tickets"],
    30:["我要参加联欢会","I'm going to the party"]
  }
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
        { sp:"大卫", hz:"你好！", py:"Nǐ hǎo!", en:"Hello!" },
        { sp:"玛丽", hz:"你好！", py:"Nǐ hǎo!", en:"Hello!" },
        { sp:"大卫", hz:"你是老师吗？", py:"Nǐ shì lǎoshī ma?", en:"Are you a teacher?" },
        { sp:"玛丽", hz:"不，我不是老师，我是学生。你呢？", py:"Bù, wǒ bú shì lǎoshī, wǒ shì xuésheng. Nǐ ne?", en:"No, I'm not a teacher, I'm a student. And you?" },
        { sp:"大卫", hz:"我也是学生，是留学生。", py:"Wǒ yě shì xuésheng, shì liúxuéshēng.", en:"I'm a student too — an international student." },
        { sp:"玛丽", hz:"你叫什么名字？", py:"Nǐ jiào shénme míngzi?", en:"What's your name?" },
        { sp:"大卫", hz:"我叫大卫。您叫什么名字？", py:"Wǒ jiào Dàwèi. Nín jiào shénme míngzi?", en:"I'm David. What's your name?" },
        { sp:"玛丽", hz:"我叫玛丽。她是谁？也是留学生吗？", py:"Wǒ jiào Mǎlì. Tā shì shéi? Yě shì liúxuéshēng ma?", en:"I'm Mary. Who's she? Also an international student?" },
        { sp:"大卫", hz:"不，她是我的老师。", py:"Bù, tā shì wǒ de lǎoshī.", en:"No, she's my teacher." },
        { sp:"玛丽", hz:"这样啊。谢谢你！", py:"Zhèyàng a. Xièxie nǐ!", en:"I see. Thank you!" },
        { sp:"大卫", hz:"不客气！", py:"Bú kèqi!", en:"You're welcome!" }
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
        { sp:"刘明", hz:"玛丽，来，我给你介绍一下儿。这是我的同学，中村。", py:"Mǎlì, lái, wǒ gěi nǐ jièshào yíxiàr. Zhè shì wǒ de tóngxué, Zhōngcūn.", en:"Mary, come, let me introduce you. This is my classmate, Nakamura." },
        { sp:"玛丽", hz:"你好！很高兴认识你。", py:"Nǐ hǎo! Hěn gāoxìng rènshi nǐ.", en:"Hello! Nice to meet you." },
        { sp:"中村", hz:"我也很高兴。你姓什么？", py:"Wǒ yě hěn gāoxìng. Nǐ xìng shénme?", en:"Nice to meet you too. What's your surname?" },
        { sp:"玛丽", hz:"我姓史，叫玛丽。你姓什么？", py:"Wǒ xìng Shǐ, jiào Mǎlì. Nǐ xìng shénme?", en:"My surname is Shi, my name is Mary. What's yours?" },
        { sp:"中村", hz:"我姓中村。你是哪国人？", py:"Wǒ xìng Zhōngcūn. Nǐ shì nǎ guó rén?", en:"My surname is Nakamura. What's your nationality?" },
        { sp:"玛丽", hz:"我是美国人。你呢？", py:"Wǒ shì Měiguó rén. Nǐ ne?", en:"I'm American. And you?" },
        { sp:"中村", hz:"我是日本人。刘明是中国人。", py:"Wǒ shì Rìběn rén. Liú Míng shì Zhōngguó rén.", en:"I'm Japanese. Liu Ming is Chinese." },
        { sp:"玛丽", hz:"你们都是留学生吗？", py:"Nǐmen dōu shì liúxuéshēng ma?", en:"Are you both international students?" },
        { sp:"中村", hz:"我是，刘明不是，他是中国学生。", py:"Wǒ shì, Liú Míng bú shì, tā shì Zhōngguó xuésheng.", en:"I am; Liu Ming isn't — he's a Chinese student." },
        { sp:"刘明", hz:"认识你们，我很高兴！", py:"Rènshi nǐmen, wǒ hěn gāoxìng!", en:"I'm glad to know you both!" }
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
        { sp:"玛丽", hz:"这是什么？", py:"Zhè shì shénme?", en:"What's this?" },
        { sp:"中村", hz:"这是我的汉语课本。", py:"Zhè shì wǒ de Hànyǔ kèběn.", en:"This is my Chinese textbook." },
        { sp:"玛丽", hz:"那本书呢？是词典吗？", py:"Nà běn shū ne? Shì cídiǎn ma?", en:"And that book? Is it a dictionary?" },
        { sp:"中村", hz:"对，那是汉日词典，是我同屋的。", py:"Duì, nà shì Hàn-Rì cídiǎn, shì wǒ tóngwū de.", en:"Yes, that's a Chinese-Japanese dictionary — my roommate's." },
        { sp:"玛丽", hz:"你同屋是谁？", py:"Nǐ tóngwū shì shéi?", en:"Who's your roommate?" },
        { sp:"中村", hz:"他叫田中，也是日本人。", py:"Tā jiào Tiánzhōng, yě shì Rìběn rén.", en:"He's called Tanaka, also Japanese." },
        { sp:"玛丽", hz:"这些杂志也是他的吗？", py:"Zhèxiē zázhì yě shì tā de ma?", en:"Are these magazines his too?" },
        { sp:"中村", hz:"不，这些是我的。我喜欢音乐，这本是音乐杂志。", py:"Bù, zhèxiē shì wǒ de. Wǒ xǐhuan yīnyuè, zhè běn shì yīnyuè zázhì.", en:"No, these are mine. I like music — this one's a music magazine." },
        { sp:"玛丽", hz:"那本日语书是谁的？", py:"Nà běn Rìyǔ shū shì shéi de?", en:"Whose is that Japanese book?" },
        { sp:"中村", hz:"是我朋友的。他学汉语，也看日语的书。", py:"Shì wǒ péngyou de. Tā xué Hànyǔ, yě kàn Rìyǔ de shū.", en:"My friend's. He studies Chinese and also reads books in Japanese." }
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
        { sp:"玛丽", hz:"对不起，教学楼在哪儿？我是新来的，不知道。", py:"Duìbuqǐ, jiàoxué lóu zài nǎr? Wǒ shì xīn lái de, bù zhīdào.", en:"Sorry, where's the classroom building? I'm new and don't know." },
        { sp:"学生", hz:"没关系。你看，宿舍在这儿，教学楼在宿舍的左边。", py:"Méi guānxi. Nǐ kàn, sùshè zài zhèr, jiàoxué lóu zài sùshè de zuǒbian.", en:"No problem. Look — the dorm's here, and the classroom building is to its left." },
        { sp:"玛丽", hz:"图书馆在教学楼的哪边？", py:"Túshūguǎn zài jiàoxué lóu de nǎ biān?", en:"Which side of the classroom building is the library on?" },
        { sp:"学生", hz:"在北边。那儿有一个大楼，就是图书馆。", py:"Zài běibian. Nàr yǒu yí ge dà lóu, jiù shì túshūguǎn.", en:"On the north side. There's a big building there — that's the library." },
        { sp:"玛丽", hz:"学校大不大？我怕找不到。", py:"Xuéxiào dà bú dà? Wǒ pà zhǎo bú dào.", en:"Is the school big? I'm afraid I won't find it." },
        { sp:"学生", hz:"不大，很好找。图书馆的右边就是宿舍。", py:"Bú dà, hěn hǎo zhǎo. Túshūguǎn de yòubian jiù shì sùshè.", en:"Not big, easy to find. The dorm is right next to the library." },
        { sp:"玛丽", hz:"太谢谢你了！", py:"Tài xièxie nǐ le!", en:"Thank you so much!" },
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
        { sp:"张红", hz:"你好，我是张红，中文系的。你是哪个系的？", py:"Nǐ hǎo, wǒ shì Zhāng Hóng, Zhōngwén xì de. Nǐ shì nǎge xì de?", en:"Hi, I'm Zhang Hong, from the Chinese department. Which department are you in?" },
        { sp:"玛丽", hz:"真巧，我也是中文系的，是研究生。", py:"Zhēn qiǎo, wǒ yě shì Zhōngwén xì de, shì yánjiūshēng.", en:"What a coincidence — I'm in Chinese too, a grad student." },
        { sp:"张红", hz:"你的专业是什么？", py:"Nǐ de zhuānyè shì shénme?", en:"What's your major?" },
        { sp:"玛丽", hz:"现代文学。你呢？", py:"Xiàndài wénxué. Nǐ ne?", en:"Modern literature. And you?" },
        { sp:"张红", hz:"我学国际关系。你现在有空儿吗？", py:"Wǒ xué guójì guānxi. Nǐ xiànzài yǒu kòngr ma?", en:"I study international relations. Do you have time now?" },
        { sp:"玛丽", hz:"有一点儿。什么事？", py:"Yǒu yìdiǎnr. Shénme shì?", en:"A little. What's up?" },
        { sp:"张红", hz:"我们系东边有一个新教室，欢迎你去看看、玩儿玩儿。", py:"Wǒmen xì dōngbian yǒu yí ge xīn jiàoshì, huānyíng nǐ qù kànkan, wánrwanr.", en:"Our department has a new classroom on the east side — you're welcome to come see it." },
        { sp:"玛丽", hz:"好啊！那儿有卫生间吗？", py:"Hǎo a! Nàr yǒu wèishēngjiān ma?", en:"Sure! Is there a restroom there?" },
        { sp:"张红", hz:"有，就在教室旁边。", py:"Yǒu, jiù zài jiàoshì pángbiān.", en:"Yes, right next to the classroom." },
        { sp:"玛丽", hz:"那太方便了，现在就去吧！", py:"Nà tài fāngbiàn le, xiànzài jiù qù ba!", en:"How convenient — let's go now!" }
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
        { sp:"大卫", hz:"请问，现在几点？", py:"Qǐngwèn, xiànzài jǐ diǎn?", en:"Excuse me, what time is it?" },
        { sp:"玛丽", hz:"差一刻八点。", py:"Chà yí kè bā diǎn.", en:"A quarter to eight." },
        { sp:"大卫", hz:"我们几点上课？", py:"Wǒmen jǐ diǎn shàng kè?", en:"What time's our class?" },
        { sp:"玛丽", hz:"八点半上课。还有四十五分钟。", py:"Bā diǎn bàn shàng kè. Hái yǒu sìshíwǔ fēnzhōng.", en:"Class starts at 8:30. There's still 45 minutes." },
        { sp:"大卫", hz:"早上还有一个讲座，几点开始？", py:"Zǎoshang hái yǒu yí ge jiǎngzuò, jǐ diǎn kāishǐ?", en:"There's a lecture this morning too — what time does it start?" },
        { sp:"玛丽", hz:"九点开始，大概十点半下课。", py:"Jiǔ diǎn kāishǐ, dàgài shí diǎn bàn xià kè.", en:"It starts at nine and ends around 10:30." },
        { sp:"大卫", hz:"太好了。那我们十一点一起吃饭吧？", py:"Tài hǎo le. Nà wǒmen shíyī diǎn yìqǐ chī fàn ba?", en:"Great. Shall we eat together at eleven?" },
        { sp:"玛丽", hz:"好。现在我先去教室，太早了也没关系。", py:"Hǎo. Xiànzài wǒ xiān qù jiàoshì, tài zǎo le yě méi guānxi.", en:"Sure. I'll head to the classroom now — a bit early is fine." },
        { sp:"大卫", hz:"那一会儿见！", py:"Nà yíhuìr jiàn!", en:"See you in a bit then!" }
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
        { sp:"玛丽", hz:"上午有课，下午没有。有什么事吗？", py:"Shàngwǔ yǒu kè, xiàwǔ méiyǒu. Yǒu shénme shì ma?", en:"Class in the morning, free in the afternoon. What's up?" },
        { sp:"大卫", hz:"听说电影院有一个很有名的电影，我们下午去看吧！", py:"Tīngshuō diànyǐngyuàn yǒu yí ge hěn yǒumíng de diànyǐng, wǒmen xiàwǔ qù kàn ba!", en:"I heard there's a famous movie at the cinema — let's go this afternoon!" },
        { sp:"玛丽", hz:"好啊！可是今天晚上我没有时间买票。", py:"Hǎo a! Kěshì jīntiān wǎnshang wǒ méiyǒu shíjiān mǎi piào.", en:"Great! But I've no time to buy tickets tonight." },
        { sp:"大卫", hz:"没问题，我去买。", py:"Méi wèntí, wǒ qù mǎi.", en:"No problem, I'll buy them." },
        { sp:"玛丽", hz:"太谢谢你了。对了，我的自行车坏了。", py:"Tài xièxie nǐ le. Duì le, wǒ de zìxíngchē huài le.", en:"Thanks so much. Oh — my bike's broken." },
        { sp:"大卫", hz:"没关系，我的车在车棚里，钥匙给你，你骑我的吧。", py:"Méi guānxi, wǒ de chē zài chēpéng lǐ, yàoshi gěi nǐ, nǐ qí wǒ de ba.", en:"No worries — my bike's in the shed, here's the key, ride mine." },
        { sp:"玛丽", hz:"那你呢？", py:"Nà nǐ ne?", en:"Then what about you?" },
        { sp:"大卫", hz:"我坐公共汽车，很快。电影院就在图书馆后边。", py:"Wǒ zuò gōnggòng qìchē, hěn kuài. Diànyǐngyuàn jiù zài túshūguǎn hòubian.", en:"I'll take the bus, it's fast. The cinema's just behind the library." },
        { sp:"玛丽", hz:"好，明天下午电影院见！", py:"Hǎo, míngtiān xiàwǔ diànyǐngyuàn jiàn!", en:"OK — see you at the cinema tomorrow afternoon!" }
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
        { sp:"大卫", hz:"周末我想去找你。你住在哪儿？", py:"Zhōumò wǒ xiǎng qù zhǎo nǐ. Nǐ zhù zài nǎr?", en:"I'd like to visit you this weekend. Where do you live?" },
        { sp:"玛丽", hz:"我住在校园东南的宿舍楼。", py:"Wǒ zhù zài xiàoyuán dōngnán de sùshè lóu.", en:"I live in the dorm in the southeast of campus." },
        { sp:"大卫", hz:"从图书馆到那儿怎么走？", py:"Cóng túshūguǎn dào nàr zěnme zǒu?", en:"How do I get there from the library?" },
        { sp:"玛丽", hz:"你坐公共汽车，两站就到；骑自行车更快，十分钟。", py:"Nǐ zuò gōnggòng qìchē, liǎng zhàn jiù dào; qí zìxíngchē gèng kuài, shí fēnzhōng.", en:"Take the bus, two stops; biking's faster — ten minutes." },
        { sp:"大卫", hz:"我骑车去吧。你的房间是几号？", py:"Wǒ qí chē qù ba. Nǐ de fángjiān shì jǐ hào?", en:"I'll bike. Which room is yours?" },
        { sp:"玛丽", hz:"东南楼三楼，305室。", py:"Dōngnán lóu sān lóu, sān-líng-wǔ shì.", en:"Southeast Building, third floor, Room 305." },
        { sp:"大卫", hz:"到了我给你打电话。你的手机号码是多少？", py:"Dào le wǒ gěi nǐ dǎ diànhuà. Nǐ de shǒujī hàomǎ shì duōshao?", en:"I'll call when I arrive. What's your cell number?" },
        { sp:"玛丽", hz:"是138…，你记一下。到了楼下等我，我下去接你。", py:"Shì yāo-sān-bā…, nǐ jì yíxià. Dào le lóuxià děng wǒ, wǒ xiàqu jiē nǐ.", en:"It's 138… — jot it down. Wait downstairs and I'll come get you." },
        { sp:"大卫", hz:"好，周末见！", py:"Hǎo, zhōumò jiàn!", en:"Great, see you this weekend!" }
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
        { sp:"售货员", hz:"您好，您要什么？", py:"Nín hǎo, nín yào shénme?", en:"Hello, what would you like?" },
        { sp:"玛丽", hz:"师傅，我要两瓶啤酒。", py:"Shīfu, wǒ yào liǎng píng píjiǔ.", en:"Sir, I'd like two bottles of beer." },
        { sp:"售货员", hz:"好，还要别的吗？", py:"Hǎo, hái yào biéde ma?", en:"OK, anything else?" },
        { sp:"玛丽", hz:"再要一瓶水。一共多少钱？", py:"Zài yào yì píng shuǐ. Yígòng duōshao qián?", en:"And a bottle of water. How much in total?" },
        { sp:"售货员", hz:"啤酒一瓶四块，水一块五，一共九块五。", py:"Píjiǔ yì píng sì kuài, shuǐ yí kuài wǔ, yígòng jiǔ kuài wǔ.", en:"Beer's 4 yuan a bottle, water 1.5 — 9.5 altogether." },
        { sp:"玛丽", hz:"给您一百块。", py:"Gěi nín yìbǎi kuài.", en:"Here's a hundred." },
        { sp:"售货员", hz:"哎呀，您有没有零钱？一百块我不好找。", py:"Āiyā, nín yǒu méiyǒu língqián? Yìbǎi kuài wǒ bù hǎo zhǎo.", en:"Oh — do you have change? A hundred's hard for me to break." },
        { sp:"玛丽", hz:"有，给您十块吧。", py:"Yǒu, gěi nín shí kuài ba.", en:"Yes, here's ten." },
        { sp:"售货员", hz:"好，找您五毛。这些啤酒都很新鲜。", py:"Hǎo, zhǎo nín wǔ máo. Zhèxiē píjiǔ dōu hěn xīnxiān.", en:"OK, 0.5 change. These beers are all fresh." },
        { sp:"玛丽", hz:"谢谢师傅！", py:"Xièxie shīfu!", en:"Thank you, sir!" }
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
        { sp:"玛丽", hz:"这是你家的照片吗？", py:"Zhè shì nǐ jiā de zhàopiàn ma?", en:"Is this a photo of your family?" },
        { sp:"中村", hz:"对，这是我们全家。", py:"Duì, zhè shì wǒmen quánjiā.", en:"Yes, this is my whole family." },
        { sp:"玛丽", hz:"你家有几口人？", py:"Nǐ jiā yǒu jǐ kǒu rén?", en:"How many people are in your family?" },
        { sp:"中村", hz:"六口人：爷爷、奶奶、爸爸、妈妈、哥哥和我。", py:"Liù kǒu rén: yéye, nǎinai, bàba, māma, gēge hé wǒ.", en:"Six: grandpa, grandma, dad, mom, my older brother and me." },
        { sp:"玛丽", hz:"你没有弟弟妹妹吗？", py:"Nǐ méiyǒu dìdi mèimei ma?", en:"No younger siblings?" },
        { sp:"中村", hz:"没有。不过我哥哥有两个孩子，很小。", py:"Méiyǒu. Búguò wǒ gēge yǒu liǎng ge háizi, hěn xiǎo.", en:"No. But my brother has two kids, still little." },
        { sp:"玛丽", hz:"这条狗也是你们家的吗？", py:"Zhè tiáo gǒu yě shì nǐmen jiā de ma?", en:"Is this dog yours too?" },
        { sp:"中村", hz:"对，还有一只小狗，是哥哥的孩子的。", py:"Duì, hái yǒu yì zhī xiǎo gǒu, shì gēge de háizi de.", en:"Yes, and there's a puppy too — my brother's kids'." },
        { sp:"玛丽", hz:"你们一般都住在一起吗？", py:"Nǐmen yìbān dōu zhù zài yìqǐ ma?", en:"Do you all usually live together?" },
        { sp:"中村", hz:"爷爷奶奶一般跟我们住在一起。我们家人不多，可是这样很热闹。", py:"Yéye nǎinai yìbān gēn wǒmen zhù zài yìqǐ. Wǒmen jiā rén bù duō, kěshì zhèyàng hěn rènao.", en:"Grandpa and grandma usually live with us. We're not many, but it's lively this way." }
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
        { sp:"玛丽", hz:"北京今天天气怎么样？", py:"Běijīng jīntiān tiānqì zěnmeyàng?", en:"How's the weather in Beijing today?" },
        { sp:"张红", hz:"晴天，不太冷，很舒服。", py:"Qíngtiān, bú tài lěng, hěn shūfu.", en:"Sunny, not too cold, very pleasant." },
        { sp:"玛丽", hz:"昨天还下雨呢，今天就晴了。", py:"Zuótiān hái xià yǔ ne, jīntiān jiù qíng le.", en:"It was still raining yesterday, and today it cleared up." },
        { sp:"张红", hz:"北京的秋天就是这样。你最喜欢哪个季节？", py:"Běijīng de qiūtiān jiù shì zhèyàng. Nǐ zuì xǐhuan nǎge jìjié?", en:"That's Beijing autumn for you. Which season do you like best?" },
        { sp:"玛丽", hz:"夏天，可以游泳。可是夏天太热了。", py:"Xiàtiān, kěyǐ yóuyǒng. Kěshì xiàtiān tài rè le.", en:"Summer — I can swim. But summer's too hot." },
        { sp:"张红", hz:"冬天呢？北京的冬天很冷，常常零下十几度，还下雪。", py:"Dōngtiān ne? Běijīng de dōngtiān hěn lěng, chángcháng língxià shí jǐ dù, hái xià xuě.", en:"And winter? Beijing winters are cold, often ten-plus below, and it snows." },
        { sp:"玛丽", hz:"那我比较喜欢秋天，不冷不热。", py:"Nà wǒ bǐjiào xǐhuan qiūtiān, bù lěng bú rè.", en:"Then I prefer autumn — neither cold nor hot." },
        { sp:"张红", hz:"我也是。春天也不错，就是常常刮风。", py:"Wǒ yě shì. Chūntiān yě búcuò, jiù shì chángcháng guā fēng.", en:"Me too. Spring's nice as well, just often windy." },
        { sp:"玛丽", hz:"差不多的天气，我们出去走走吧！", py:"Chàbuduō de tiānqì, wǒmen chūqu zǒuzou ba!", en:"With weather like this, let's go for a walk!" }
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
        { sp:"大卫", hz:"喂，玛丽，你在干什么呢？", py:"Wéi, Mǎlì, nǐ zài gàn shénme ne?", en:"Hey Mary, what are you up to?" },
        { sp:"玛丽", hz:"我正在做作业。你呢？", py:"Wǒ zhèngzài zuò zuòyè. Nǐ ne?", en:"I'm doing homework. You?" },
        { sp:"大卫", hz:"我在书店对面的咖啡馆喝咖啡。", py:"Wǒ zài shūdiàn duìmiàn de kāfēiguǎn hē kāfēi.", en:"I'm having coffee at the café across from the bookshop." },
        { sp:"玛丽", hz:"你今天不上课吗？", py:"Nǐ jīntiān bú shàng kè ma?", en:"No class for you today?" },
        { sp:"大卫", hz:"今天星期三，下午没课，所以我出来了。", py:"Jīntiān xīngqīsān, xiàwǔ méi kè, suǒyǐ wǒ chūlai le.", en:"It's Wednesday — no afternoon class, so I came out." },
        { sp:"玛丽", hz:"这个星期我每天从早到晚都有课，还有听写，太忙了。", py:"Zhège xīngqī wǒ měi tiān cóng zǎo dào wǎn dōu yǒu kè, hái yǒu tīngxiě, tài máng le.", en:"This week I have class from morning to night every day, plus dictation — so busy." },
        { sp:"大卫", hz:"那你几点做完作业？做完了来找我吧。", py:"Nà nǐ jǐ diǎn zuò wán zuòyè? Zuò wán le lái zhǎo wǒ ba.", en:"When will you finish? Come find me when you're done." },
        { sp:"玛丽", hz:"大概中午。我自己一个人做，很快。", py:"Dàgài zhōngwǔ. Wǒ zìjǐ yí ge rén zuò, hěn kuài.", en:"Around noon. I'll do it on my own — it's quick." },
        { sp:"大卫", hz:"好，我在这儿等你，我们一起唱唱歌、聊聊天。", py:"Hǎo, wǒ zài zhèr děng nǐ, wǒmen yìqǐ chàngchang gē, liáoliao tiān.", en:"OK, I'll wait here — we can sing and chat." }
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
        { sp:"张红", hz:"星期天你有什么打算？", py:"Xīngqītiān nǐ yǒu shénme dǎsuàn?", en:"Any plans for Sunday?" },
        { sp:"玛丽", hz:"我想先去银行换点儿钱，然后去购物中心。", py:"Wǒ xiǎng xiān qù yínháng huàn diǎnr qián, ránhòu qù gòuwù zhōngxīn.", en:"I want to change some money at the bank first, then go to the mall." },
        { sp:"张红", hz:"咱们一起去吧！我也想借几本书，还想买件衣服。", py:"Zánmen yìqǐ qù ba! Wǒ yě xiǎng jiè jǐ běn shū, hái xiǎng mǎi jiàn yīfu.", en:"Let's go together! I want to borrow some books too, and buy some clothes." },
        { sp:"玛丽", hz:"好啊。那儿的东西贵吗？", py:"Hǎo a. Nàr de dōngxi guì ma?", en:"Sure. Is stuff there expensive?" },
        { sp:"张红", hz:"还可以，质量不错，也不太贵。", py:"Hái kěyǐ, zhìliàng búcuò, yě bú tài guì.", en:"It's OK — good quality and not too pricey." },
        { sp:"玛丽", hz:"购物中心几点开门？", py:"Gòuwù zhōngxīn jǐ diǎn kāimén?", en:"What time does the mall open?" },
        { sp:"张红", hz:"星期天早上开门比较晚，十点才开。", py:"Xīngqītiān zǎoshang kāimén bǐjiào wǎn, shí diǎn cái kāi.", en:"On Sunday it opens late — not until ten." },
        { sp:"玛丽", hz:"那咱们先去银行，银行九点就开门。", py:"Nà zánmen xiān qù yínháng, yínháng jiǔ diǎn jiù kāimén.", en:"Then let's do the bank first — it opens at nine." },
        { sp:"张红", hz:"好主意。银行旁边有个商店，咱们顺便看看。", py:"Hǎo zhǔyi. Yínháng pángbiān yǒu ge shāngdiàn, zánmen shùnbiàn kànkan.", en:"Good idea. There's a shop next to the bank — we can browse on the way." }
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
        { sp:"售货员", hz:"有蓝的、黄的、绿的。这件深蓝的怎么样？", py:"Yǒu lán de, huáng de, lǜ de. Zhè jiàn shēnlán de zěnmeyàng?", en:"We have blue, yellow, green. How about this dark blue one?" },
        { sp:"玛丽", hz:"深蓝的很漂亮！可是有点儿贵。", py:"Shēnlán de hěn piàoliang! Kěshì yǒudiǎnr guì.", en:"The dark blue is lovely! But a bit expensive." },
        { sp:"售货员", hz:"这件浅一点儿的便宜，颜色也新。", py:"Zhè jiàn qiǎn yìdiǎnr de piányi, yánsè yě xīn.", en:"This lighter one's cheaper, and the color's fresh." },
        { sp:"玛丽", hz:"昨天我看了一件灰的，今天怎么没有了？", py:"Zuótiān wǒ kàn le yí jiàn huī de, jīntiān zěnme méiyǒu le?", en:"I saw a gray one yesterday — how come it's gone today?" },
        { sp:"售货员", hz:"灰的卖完了。黑的还有，也很好看。", py:"Huī de mài wán le. Hēi de hái yǒu, yě hěn hǎokàn.", en:"The gray sold out. There's still black — also nice." },
        { sp:"玛丽", hz:"那我要这件深蓝的吧，虽然贵一点儿，可是我很喜欢。", py:"Nà wǒ yào zhè jiàn shēnlán de ba, suīrán guì yìdiǎnr, kěshì wǒ hěn xǐhuan.", en:"I'll take the dark blue then — a bit pricey, but I really like it." },
        { sp:"售货员", hz:"您真有眼光！", py:"Nín zhēn yǒu yǎnguāng!", en:"You have great taste!" }
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
        { sp:"大卫", hz:"后天是玛丽的生日，我们送她什么礼物好？", py:"Hòutiān shì Mǎlì de shēngrì, wǒmen sòng tā shénme lǐwù hǎo?", en:"Mary's birthday is the day after tomorrow — what should we give her?" },
        { sp:"张红", hz:"送花还是送巧克力？", py:"Sòng huā háishi sòng qiǎokèlì?", en:"Flowers or chocolate?" },
        { sp:"大卫", hz:"她特别喜欢甜的，比如巧克力、蛋糕。", py:"Tā tèbié xǐhuan tián de, bǐrú qiǎokèlì, dàngāo.", en:"She really likes sweet things, like chocolate and cake." },
        { sp:"张红", hz:"那我们送一个生日蛋糕，再送一束花，怎么样？", py:"Nà wǒmen sòng yí ge shēngrì dàngāo, zài sòng yí shù huā, zěnmeyàng?", en:"Then let's give a birthday cake and a bouquet — how's that?" },
        { sp:"大卫", hz:"好主意！可是花是送给男生还是女生的？", py:"Hǎo zhǔyi! Kěshì huā shì sòng gěi nánshēng háishi nǚshēng de?", en:"Good idea! But do you give flowers to guys or girls?" },
        { sp:"张红", hz:"送女生比较合适。玛丽一定会很高兴。", py:"Sòng nǚshēng bǐjiào héshì. Mǎlì yídìng huì hěn gāoxìng.", en:"They suit girls better. Mary will surely be happy." },
        { sp:"大卫", hz:"那我们什么时候去买？", py:"Nà wǒmen shénme shíhou qù mǎi?", en:"When shall we go buy them?" },
        { sp:"张红", hz:"今天晚饭以后一起去吧，我知道一家花店特别好。", py:"Jīntiān wǎnfàn yǐhòu yìqǐ qù ba, wǒ zhīdào yì jiā huādiàn tèbié hǎo.", en:"Let's go after dinner tonight — I know a great flower shop." },
        { sp:"大卫", hz:"好，那就这么说定了！", py:"Hǎo, nà jiù zhème shuō dìng le!", en:"Great, it's settled then!" }
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
        { sp:"大卫", hz:"周末到了！你有什么安排？", py:"Zhōumò dào le! Nǐ yǒu shénme ānpái?", en:"The weekend's here! Any plans?" },
        { sp:"玛丽", hz:"我想睡懒觉，然后在家看看电视、洗洗衣服。", py:"Wǒ xiǎng shuì lǎnjiào, ránhòu zài jiā kànkan diànshì, xǐxi yīfu.", en:"I want to sleep in, then watch TV and do laundry at home." },
        { sp:"大卫", hz:"又在家？我觉得在家看电视太没意思了。", py:"Yòu zài jiā? Wǒ juéde zài jiā kàn diànshì tài méi yìsi le.", en:"Home again? I think staying in watching TV is so boring." },
        { sp:"玛丽", hz:"那你说去哪儿？", py:"Nà nǐ shuō qù nǎr?", en:"Then where do you suggest?" },
        { sp:"大卫", hz:"咱们出去逛逛，看起来天气不错。晚上还可以去迪厅跳舞。", py:"Zánmen chūqu guàngguang, kànqǐlai tiānqì búcuò. Wǎnshang hái kěyǐ qù dītīng tiào wǔ.", en:"Let's go out — the weather looks good. Tonight we could even go dancing at the club." },
        { sp:"玛丽", hz:"跳舞我不太会。不过我们可以先去听音乐会。", py:"Tiào wǔ wǒ bú tài huì. Búguò wǒmen kěyǐ xiān qù tīng yīnyuèhuì.", en:"I'm not great at dancing. But we could go to a concert first." },
        { sp:"大卫", hz:"好啊！中午我们自己包饺子，怎么样？", py:"Hǎo a! Zhōngwǔ wǒmen zìjǐ bāo jiǎozi, zěnmeyàng?", en:"Great! And at noon let's make dumplings ourselves, OK?" },
        { sp:"玛丽", hz:"好！这样安排真不错。这个周末咱们好好儿玩儿！", py:"Hǎo! Zhèyàng ānpái zhēn búcuò. Zhège zhōumò zánmen hǎohāor wánr!", en:"Yes! That's a nice plan. Let's really enjoy this weekend!" }
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
        { sp:"玛丽", hz:"你家真干净！这是一点儿小心意，请收下。", py:"Nǐ jiā zhēn gānjìng! Zhè shì yìdiǎnr xiǎo xīnyì, qǐng shōu xià.", en:"Your home's so tidy! Here's a little something, please accept it." },
        { sp:"主人", hz:"哎呀，你太客气了！喝茶还是喝果汁？", py:"Āiyā, nǐ tài kèqi le! Hē chá háishi hē guǒzhī?", en:"Oh, you shouldn't have! Tea or juice?" },
        { sp:"玛丽", hz:"随便，都行，谢谢。", py:"Suíbiàn, dōu xíng, xièxie.", en:"Either's fine, thanks." },
        { sp:"主人", hz:"路上顺利吗？你是怎么来的？", py:"Lùshang shùnlì ma? Nǐ shì zěnme lái de?", en:"Was the trip smooth? How did you come?" },
        { sp:"玛丽", hz:"我本来想坐地铁，可是早上太挤了，所以打车来的。", py:"Wǒ běnlái xiǎng zuò dìtiě, kěshì zǎoshang tài jǐ le, suǒyǐ dǎ chē lái de.", en:"I meant to take the subway, but it was too crowded this morning, so I took a taxi." },
        { sp:"主人", hz:"打车快一点儿。你饿不饿？我们一会儿吃饺子。", py:"Dǎ chē kuài yìdiǎnr. Nǐ è bu è? Wǒmen yíhuìr chī jiǎozi.", en:"A taxi's quicker. Are you hungry? We'll have dumplings soon." },
        { sp:"玛丽", hz:"太好了！我很想试试你包的饺子。我不会包，你能教我吗？", py:"Tài hǎo le! Wǒ hěn xiǎng shìshi nǐ bāo de jiǎozi. Wǒ bú huì bāo, nǐ néng jiāo wǒ ma?", en:"Wonderful! I'd love to try your dumplings. I don't know how to make them — can you teach me?" },
        { sp:"主人", hz:"当然可以！屋里有空调，不冷，咱们慢慢包。", py:"Dāngrán kěyǐ! Wū lǐ yǒu kōngtiáo, bù lěng, zánmen mànman bāo.", en:"Of course! It's warm inside with the AC — let's take our time." }
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
        { sp:"玛丽", hz:"北方人和南方人吃的一样吗？", py:"Běifāng rén hé nánfāng rén chī de yíyàng ma?", en:"Do northerners and southerners eat the same things?" },
        { sp:"中村", hz:"不太一样。对南方人来说，米饭最重要；北方人更喜欢面食。", py:"Bú tài yíyàng. Duì nánfāng rén lái shuō, mǐfàn zuì zhòngyào; běifāng rén gèng xǐhuan miànshí.", en:"Not quite. For southerners, rice is most important; northerners prefer wheat foods." },
        { sp:"玛丽", hz:"过节的时候北方人吃什么？", py:"Guò jié de shíhou běifāng rén chī shénme?", en:"What do northerners eat during festivals?" },
        { sp:"中村", hz:"一般吃饺子。家里来客人，大家一起包，很热闹。", py:"Yìbān chī jiǎozi. Jiā lǐ lái kèrén, dàjiā yìqǐ bāo, hěn rènao.", en:"Usually dumplings. When guests come, everyone makes them together — very lively." },
        { sp:"玛丽", hz:"自己包麻烦吗？", py:"Zìjǐ bāo máfan ma?", en:"Is making them yourself a hassle?" },
        { sp:"中村", hz:"有点儿麻烦，得花很长时间，还得准备好几种馅儿。", py:"Yǒudiǎnr máfan, děi huā hěn cháng shíjiān, hái děi zhǔnbèi hǎojǐ zhǒng xiànr.", en:"A bit — it takes a long time, and you have to prepare several kinds of filling." },
        { sp:"玛丽", hz:"如果没有时间的话，怎么办？", py:"Rúguǒ méiyǒu shíjiān de huà, zěnme bàn?", en:"What if you don't have time?" },
        { sp:"中村", hz:"那就去超市买一袋速冻的，又快又方便。", py:"Nà jiù qù chāoshì mǎi yí dài sùdòng de, yòu kuài yòu fāngbiàn.", en:"Then buy a bag of frozen ones at the supermarket — quick and easy." },
        { sp:"玛丽", hz:"味道好吃吗？", py:"Wèidào hǎochī ma?", en:"Do they taste good?" },
        { sp:"中村", hz:"也不错。不过对我来说，还是自己包的最有意思。", py:"Yě búcuò. Búguò duì wǒ lái shuō, háishi zìjǐ bāo de zuì yǒu yìsi.", en:"Not bad. But for me, homemade ones are still the most fun." }
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
        { sp:"张红", hz:"已经中午了，你怎么才起床？", py:"Yǐjīng zhōngwǔ le, nǐ zěnme cái qǐ chuáng?", en:"It's already noon — why are you only getting up?" },
        { sp:"大卫", hz:"不好意思，我昨天夜里两点才睡。", py:"Bù hǎoyìsi, wǒ zuótiān yèlǐ liǎng diǎn cái shuì.", en:"Sorry — I didn't fall asleep until 2 a.m. last night." },
        { sp:"张红", hz:"你怎么睡得这么晚？", py:"Nǐ zěnme shuì de zhème wǎn?", en:"Why do you sleep so late?" },
        { sp:"大卫", hz:"我习惯了。已经好几年了，每天都很晚睡。", py:"Wǒ xíguàn le. Yǐjīng hǎojǐ nián le, měi tiān dōu hěn wǎn shuì.", en:"I'm used to it. It's been years — I go to bed late every day." },
        { sp:"张红", hz:"这个毛病得改一改。早睡早起对身体好。", py:"Zhège máobìng děi gǎi yi gǎi. Zǎo shuì zǎo qǐ duì shēntǐ hǎo.", en:"You should fix that habit. Early to bed and early to rise is good for you." },
        { sp:"大卫", hz:"你说得对。可是刚开始工作的时候太忙，慢慢就习惯晚睡了。", py:"Nǐ shuō de duì. Kěshì gāng kāishǐ gōngzuò de shíhou tài máng, mànman jiù xíguàn wǎn shuì le.", en:"You're right. But when I first started working I was too busy, and gradually got used to sleeping late." },
        { sp:"张红", hz:"你今年多大年纪了？", py:"Nǐ jīnnián duō dà niánjì le?", en:"How old are you this year?" },
        { sp:"大卫", hz:"二十五。年纪不大，可是身体大概不太好，得改改作息。", py:"Èrshíwǔ. Niánjì bú dà, kěshì shēntǐ dàgài bú tài hǎo, děi gǎigai zuòxī.", en:"Twenty-five. Not old, but my health's probably not great — I should fix my routine." }
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
        { sp:"玛丽", hz:"听说小王住院了，我们去医院看看他吧。", py:"Tīngshuō Xiǎo Wáng zhù yuàn le, wǒmen qù yīyuàn kànkan tā ba.", en:"I heard Xiao Wang's in the hospital — let's go visit him." },
        { sp:"大卫", hz:"好。他身体怎么样了？", py:"Hǎo. Tā shēntǐ zěnmeyàng le?", en:"Sure. How's he doing?" },
        { sp:"玛丽", hz:"医生说没什么大问题，就是最近背生词、准备考试，太累了。", py:"Yīshēng shuō méi shénme dà wèntí, jiùshì zuìjìn bèi shēngcí, zhǔnbèi kǎoshì, tài lèi le.", en:"The doctor says nothing serious — he's just been memorizing words and prepping for exams, and got overtired." },
        { sp:"大卫", hz:"考试的时候大家都累死了。我们给他带点儿什么？", py:"Kǎoshì de shíhou dàjiā dōu lèi sǐ le. Wǒmen gěi tā dài diǎnr shénme?", en:"Everyone's worn out during exams. What should we bring him?" },
        { sp:"玛丽", hz:"带点儿炒菜和面条儿吧，医院的饭他大概吃不惯。", py:"Dài diǎnr chǎocài hé miàntiáor ba, yīyuàn de fàn tā dàgài chī bú guàn.", en:"Let's bring some stir-fry and noodles — he probably isn't used to hospital food." },
        { sp:"大卫", hz:"好。对了，别忘了买点儿水果。", py:"Hǎo. Duì le, bié wàng le mǎi diǎnr shuǐguǒ.", en:"OK. Oh, and don't forget to buy some fruit." },
        { sp:"玛丽", hz:"到了别说太多话，让他好好儿休息。", py:"Dào le bié shuō tài duō huà, ràng tā hǎohāor xiūxi.", en:"When we're there, let's not talk too much — let him rest well." },
        { sp:"大卫", hz:"对。听说医生同意他明天就出院，真幸福！", py:"Duì. Tīngshuō yīshēng tóngyì tā míngtiān jiù chū yuàn, zhēn xìngfú!", en:"Right. I heard the doctor agreed he can leave tomorrow — lucky him!" }
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
        { sp:"玛丽", hz:"昨天的饭局怎么样？你脸色好像不太好。", py:"Zuótiān de fànjú zěnmeyàng? Nǐ liǎnsè hǎoxiàng bú tài hǎo.", en:"How was yesterday's dinner? You look a bit pale." },
        { sp:"大卫", hz:"别提了。大家很热情，不停地劝酒。", py:"Bié tí le. Dàjiā hěn rèqíng, bù tíng de quàn jiǔ.", en:"Ugh, don't ask. Everyone was so eager, constantly pushing drinks." },
        { sp:"玛丽", hz:"你喝了多少？", py:"Nǐ hē le duōshao?", en:"How much did you drink?" },
        { sp:"大卫", hz:"有的人喝白酒，有的人喝啤酒。我大概喝了半斤白酒。", py:"Yǒude rén hē báijiǔ, yǒude rén hē píjiǔ. Wǒ dàgài hē le bàn jīn báijiǔ.", en:"Some had spirits, some beer. I drank about half a jin of spirits." },
        { sp:"玛丽", hz:"半斤白酒？你没醉吗？", py:"Bàn jīn báijiǔ? Nǐ méi zuì ma?", en:"Half a jin of spirits? Weren't you drunk?" },
        { sp:"大卫", hz:"回来的时候头疼死了，好像有点儿醉，还想吐。", py:"Huílai de shíhou tóu téng sǐ le, hǎoxiàng yǒudiǎnr zuì, hái xiǎng tù.", en:"On the way back my head was killing me — a bit drunk, even felt like throwing up." },
        { sp:"玛丽", hz:"你现在渴不渴？我帮你倒杯水。", py:"Nǐ xiànzài kě bu kě? Wǒ bāng nǐ dào bēi shuǐ.", en:"Are you thirsty now? Let me pour you some water." },
        { sp:"大卫", hz:"谢谢。以后这种饭局我真不敢继续参加了。", py:"Xièxie. Yǐhòu zhè zhǒng fànjú wǒ zhēn bù gǎn jìxù cānjiā le.", en:"Thanks. I really don't dare keep going to dinners like that." },
        { sp:"玛丽", hz:"喝多了对身体不好，下次少喝点儿。", py:"Hē duō le duì shēntǐ bù hǎo, xià cì shǎo hē diǎnr.", en:"Too much drinking is bad for you — drink less next time." }
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
        { sp:"老师", hz:"你什么时候病的？看病了吗？", py:"Nǐ shénme shíhou bìng de? Kàn bìng le ma?", en:"When did you get sick? Have you seen a doctor?" },
        { sp:"玛丽", hz:"前天就不舒服了。昨天去看病，医生给我打了针。", py:"Qiántiān jiù bù shūfu le. Zuótiān qù kàn bìng, yīshēng gěi wǒ dǎ le zhēn.", en:"I felt unwell two days ago. Yesterday I saw a doctor and got a shot." },
        { sp:"老师", hz:"那你最好在家休息，别来上课了。", py:"Nà nǐ zuìhǎo zài jiā xiūxi, bié lái shàng kè le.", en:"Then you'd better rest at home and not come to class." },
        { sp:"玛丽", hz:"我明天能请一天假吗？", py:"Wǒ míngtiān néng qǐng yì tiān jià ma?", en:"May I take one day's leave tomorrow?" },
        { sp:"老师", hz:"可以。不过你得写一张请假条。", py:"Kěyǐ. Búguò nǐ děi xiě yì zhāng qǐngjiàtiáo.", en:"Yes. But you need to write a leave note." },
        { sp:"玛丽", hz:"请假条怎么写？", py:"Qǐngjiàtiáo zěnme xiě?", en:"How do I write it?" },
        { sp:"老师", hz:"写清楚谁、为什么、请几天，最后写“希望批准”。", py:"Xiě qīngchu shéi, wèishénme, qǐng jǐ tiān, zuìhòu xiě “xīwàng pīzhǔn”.", en:"State clearly who you are, why, how many days, and end with \"please approve\"." },
        { sp:"玛丽", hz:"好，我回去就写。谢谢老师！", py:"Hǎo, wǒ huíqu jiù xiě. Xièxie lǎoshī!", en:"OK, I'll write it when I get back. Thank you!" }
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
        { sp:"大卫", hz:"平时半个钟头就到了。今天有一辆车轮胎破了，路上更堵。", py:"Píngshí bàn ge zhōngtóu jiù dào le. Jīntiān yǒu yí liàng chē lúntāi pò le, lùshang gèng dǔ.", en:"Usually it's half an hour. Today a car had a burst tire, so it was even worse." },
        { sp:"老师", hz:"你当时着急吗？", py:"Nǐ dāngshí zháojí ma?", en:"Were you anxious at the time?" },
        { sp:"大卫", hz:"很着急，可是没办法。下车以后我又跑了十分钟。", py:"Hěn zháojí, kěshì méi bànfǎ. Xià chē yǐhòu wǒ yòu pǎo le shí fēnzhōng.", en:"Very — but nothing to do. After getting off I ran another ten minutes." },
        { sp:"老师", hz:"下次早点儿出来。今天我们学写作文，你先看看别人写的。", py:"Xià cì zǎo diǎnr chūlai. Jīntiān wǒmen xué xiě zuòwén, nǐ xiān kànkan biéren xiě de.", en:"Leave earlier next time. Today we're learning to write compositions — first look at others' work." },
        { sp:"大卫", hz:"好。老师，这次的作文难不难？", py:"Hǎo. Lǎoshī, zhè cì de zuòwén nán bu nán?", en:"OK. Teacher, is this composition hard?" },
        { sp:"老师", hz:"语法不难，比较简单，可是你得多练口语。", py:"Yǔfǎ bù nán, bǐjiào jiǎndān, kěshì nǐ děi duō liàn kǒuyǔ.", en:"The grammar isn't hard, fairly simple, but you should practice speaking more." }
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
        { sp:"张红", hz:"周末我们在食堂开个聚会，你来吗？", py:"Zhōumò wǒmen zài shítáng kāi ge jùhuì, nǐ lái ma?", en:"We're having a party at the canteen this weekend — coming?" },
        { sp:"玛丽", hz:"当然来！是给谁开的？", py:"Dāngrán lái! Shì gěi shéi kāi de?", en:"Of course! Who's it for?" },
        { sp:"张红", hz:"给大卫。他快毕业了，我们祝他一切顺利。", py:"Gěi Dàwèi. Tā kuài bì yè le, wǒmen zhù tā yíqiè shùnlì.", en:"For David. He's graduating soon; we want to wish him all the best." },
        { sp:"玛丽", hz:"有什么活动？", py:"Yǒu shénme huódòng?", en:"What's on the program?" },
        { sp:"张红", hz:"先一起吃饭，喝点儿葡萄酒，然后去唱卡拉OK。", py:"Xiān yìqǐ chī fàn, hē diǎnr pútáojiǔ, ránhòu qù chàng kǎlā'ōukèi.", en:"First we eat together, have some wine, then go sing karaoke." },
        { sp:"玛丽", hz:"太好了！白天还有别的安排吗？", py:"Tài hǎo le! Báitiān hái yǒu biéde ānpái ma?", en:"Great! Anything during the day?" },
        { sp:"张红", hz:"下午可以去美术馆看展览，晚上再聚。", py:"Xiàwǔ kěyǐ qù měishùguǎn kàn zhǎnlǎn, wǎnshang zài jù.", en:"In the afternoon we can see an exhibition at the art gallery, then meet up in the evening." },
        { sp:"玛丽", hz:"几点、在哪儿见面？", py:"Jǐ diǎn, zài nǎr jiànmiàn?", en:"What time and where do we meet?" },
        { sp:"张红", hz:"六点在食堂门口。你放心，我在那儿等你。", py:"Liù diǎn zài shítáng ménkǒu. Nǐ fàng xīn, wǒ zài nàr děng nǐ.", en:"Six, at the canteen entrance. Don't worry, I'll wait for you there." }
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
        { sp:"玛丽", hz:"你每天早上都跑步吗？", py:"Nǐ měi tiān zǎoshang dōu pǎo bù ma?", en:"Do you run every morning?" },
        { sp:"张红", hz:"对，我在湖边跑。早上空气这么新鲜，跑完出一身汗，特别舒服。", py:"Duì, wǒ zài hú biān pǎo. Zǎoshang kōngqì zhème xīnxiān, pǎo wán chū yì shēn hàn, tèbié shūfu.", en:"Yes, by the lake. The morning air is so fresh; after a run I'm all sweaty and it feels great." },
        { sp:"玛丽", hz:"我也想锻炼，可是一个人跑没劲儿。", py:"Wǒ yě xiǎng duànliàn, kěshì yí ge rén pǎo méi jìnr.", en:"I want to exercise too, but running alone is no fun." },
        { sp:"张红", hz:"那你参加个班吧。我报名了太极拳班。", py:"Nà nǐ cānjiā ge bān ba. Wǒ bàomíng le tàijíquán bān.", en:"Then join a class. I signed up for the taiji class." },
        { sp:"玛丽", hz:"太极拳难吗？", py:"Tàijíquán nán ma?", en:"Is taiji hard?" },
        { sp:"张红", hz:"不太难，学起来很有意思。你也来吧！", py:"Bú tài nán, xué qǐlai hěn yǒu yìsi. Nǐ yě lái ba!", en:"Not too hard, and it's fun to learn. Come along!" },
        { sp:"玛丽", hz:"好，我明天早上就去报名。可是我常常忘带闹钟，起不来。", py:"Hǎo, wǒ míngtiān zǎoshang jiù qù bàomíng. Kěshì wǒ chángcháng wàng dài nàozhōng, qǐ bù lái.", en:"OK, I'll sign up tomorrow morning. But I often forget my alarm clock and can't get up." },
        { sp:"张红", hz:"没关系，我给你打电话叫你，咱们一起去，重新开始好好儿锻炼。", py:"Méi guānxi, wǒ gěi nǐ dǎ diànhuà jiào nǐ, zánmen yìqǐ qù, chóngxīn kāishǐ hǎohāor duànliàn.", en:"No problem, I'll call to wake you — we'll go together and start exercising properly again." },
        { sp:"玛丽", hz:"你真棒！那晚安，明天见！", py:"Nǐ zhēn bàng! Nà wǎn'ān, míngtiān jiàn!", en:"You're the best! Goodnight then, see you tomorrow!" }
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
        { sp:"张红", hz:"快要放假了，你决定去哪儿？", py:"Kuàiyào fàng jià le, nǐ juédìng qù nǎr?", en:"Vacation's almost here — decided where to go?" },
        { sp:"玛丽", hz:"我打算去旅行，可能圣诞节出发。你呢？", py:"Wǒ dǎsuàn qù lǚxíng, kěnéng Shèngdàn Jié chūfā. Nǐ ne?", en:"I plan to travel, probably leaving around Christmas. You?" },
        { sp:"张红", hz:"我还在考虑。最近功课太多，只好先努力复习。", py:"Wǒ hái zài kǎolǜ. Zuìjìn gōngkè tài duō, zhǐhǎo xiān nǔlì fùxí.", en:"I'm still thinking. There's too much coursework lately, so I have to focus on reviewing first." },
        { sp:"玛丽", hz:"你今天怎么去邮局了？", py:"Nǐ jīntiān zěnme qù yóujú le?", en:"Why'd you go to the post office today?" },
        { sp:"张红", hz:"给亲戚寄新年贺卡，还买了几张邮票。", py:"Gěi qīnqi jì xīnnián hèkǎ, hái mǎi le jǐ zhāng yóupiào.", en:"To mail New Year cards to relatives, and I bought some stamps." },
        { sp:"玛丽", hz:"人多吗？", py:"Rén duō ma?", en:"Was it crowded?" },
        { sp:"张红", hz:"人太多了，我只好排了整整半天的队，刚才才回来。", py:"Rén tài duō le, wǒ zhǐhǎo pái le zhěngzhěng bàntiān de duì, gāngcái cái huílai.", en:"So crowded — I had to queue for ages and only just got back." },
        { sp:"玛丽", hz:"真辛苦！你也给我寄张明信片吧，从你旅行的地方。", py:"Zhēn xīnkǔ! Nǐ yě gěi wǒ jì zhāng míngxìnpiàn ba, cóng nǐ lǚxíng de dìfang.", en:"What a pain! Send me a postcard too, from wherever you travel." },
        { sp:"张红", hz:"没问题，放心吧！", py:"Méi wèntí, fàng xīn ba!", en:"No problem, don't worry!" }
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
        { sp:"玛丽", hz:"我想去哈尔滨，听说那儿冬天的风景美极了。", py:"Wǒ xiǎng qù Hā'ěrbīn, tīngshuō nàr dōngtiān de fēngjǐng měi jí le.", en:"I want to go to Harbin — I hear the winter scenery there is gorgeous." },
        { sp:"张大朋", hz:"你要去几天？", py:"Nǐ yào qù jǐ tiān?", en:"How many days will you go for?" },
        { sp:"玛丽", hz:"想多待几天。我对中国古代历史特别感兴趣，那边有很多古代的地方。", py:"Xiǎng duō dāi jǐ tiān. Wǒ duì Zhōngguó gǔdài lìshǐ tèbié gǎn xìngqù, nàbiān yǒu hěn duō gǔdài de dìfang.", en:"I'd like to stay a few days. I'm really into ancient Chinese history, and there are many historical places there." },
        { sp:"张大朋", hz:"可是你不复习功课吗？春节以后就考试了。", py:"Kěshì nǐ bù fùxí gōngkè ma? Chūn Jié yǐhòu jiù kǎoshì le.", en:"But won't you review your coursework? Exams are right after Spring Festival." },
        { sp:"玛丽", hz:"会的。老师也让我们抓紧时间复习。", py:"Huì de. Lǎoshī yě ràng wǒmen zhuājǐn shíjiān fùxí.", en:"I will. The teacher told us to hurry up and review too." },
        { sp:"张大朋", hz:"那你应该带上课本，一边旅行一边复习。", py:"Nà nǐ yīnggāi dài shàng kèběn, yìbiān lǚxíng yìbiān fùxí.", en:"Then you should bring your textbook and review while you travel." },
        { sp:"玛丽", hz:"好主意。其实我有点儿想念家里，也想给家人寄点儿东西。", py:"Hǎo zhǔyi. Qíshí wǒ yǒudiǎnr xiǎngniàn jiā lǐ, yě xiǎng gěi jiārén jì diǎnr dōngxi.", en:"Good idea. Actually I miss home a bit and want to send my family something." },
        { sp:"张大朋", hz:"那这趟旅行一定会很有意思，一定考得也不错！", py:"Nà zhè tàng lǚxíng yídìng huì hěn yǒu yìsi, yídìng kǎo de yě búcuò!", en:"Then this trip will surely be great — and you'll do well on the exams too!" }
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
        { sp:"张红", hz:"考完了吗？考得怎么样？", py:"Kǎo wán le ma? Kǎo de zěnmeyàng?", en:"All done? How'd it go?" },
        { sp:"玛丽", hz:"阅读还行，可是汉字写得太慢，有几道题没做完。", py:"Yuèdú hái xíng, kěshì Hànzì xiě de tài màn, yǒu jǐ dào tí méi zuò wán.", en:"Reading was OK, but I wrote characters too slowly and didn't finish a few questions." },
        { sp:"张红", hz:"你为什么这么紧张？放松点儿。", py:"Nǐ wèishénme zhème jǐnzhāng? Fàngsōng diǎnr.", en:"Why so tense? Relax a bit." },
        { sp:"玛丽", hz:"我担心记汉字的方法不对，记了又忘。", py:"Wǒ dānxīn jì Hànzì de fāngfǎ bú duì, jì le yòu wàng.", en:"I'm worried my way of memorizing characters is wrong — I learn them and then forget." },
        { sp:"张红", hz:"你现在怎么记？", py:"Nǐ xiànzài zěnme jì?", en:"How do you memorize them now?" },
        { sp:"玛丽", hz:"一个一个地写，写很多次。可是效果不太好。", py:"Yí ge yí ge de xiě, xiě hěn duō cì. Kěshì xiàoguǒ bú tài hǎo.", en:"I write them one by one, many times. But it doesn't work well." },
        { sp:"张红", hz:"也许你可以编个小故事来记，这样效果确实好一点儿。", py:"Yěxǔ nǐ kěyǐ biān ge xiǎo gùshi lái jì, zhèyàng xiàoguǒ quèshí hǎo yìdiǎnr.", en:"Maybe make up a little story to remember them — that really does help." },
        { sp:"玛丽", hz:"这个方法听起来不错，我下次试试。谢谢你的帮助！", py:"Zhège fāngfǎ tīngqǐlai búcuò, wǒ xià cì shìshi. Xièxie nǐ de bāngzhù!", en:"That method sounds good — I'll try it next time. Thanks for the help!" },
        { sp:"张红", hz:"别担心，多练习就能解决。", py:"Bié dānxīn, duō liànxí jiù néng jiějué.", en:"Don't worry — with more practice you'll solve it." }
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
        { sp:"售票员", hz:"哪天的？要卧铺还是硬座？", py:"Nǎ tiān de? Yào wòpù háishi yìngzuò?", en:"For which day? Sleeper or hard seat?" },
        { sp:"玛丽", hz:"后天的，卧铺。有吗？", py:"Hòutiān de, wòpù. Yǒu ma?", en:"For the day after tomorrow, a sleeper. Any left?" },
        { sp:"售票员", hz:"糟糕，后天的卧铺全部卖完了。", py:"Zāogāo, hòutiān de wòpù quánbù mài wán le.", en:"Oh no — the sleepers for that day are all sold out." },
        { sp:"玛丽", hz:"别提了，我等了这么久才排到。那……硬座还有吗？", py:"Bié tí le, wǒ děng le zhème jiǔ cái pái dào. Nà… yìngzuò hái yǒu ma?", en:"Ugh, I queued so long to get here. Then… any hard seats left?" },
        { sp:"售票员", hz:"硬座还有。给你一张。", py:"Yìngzuò hái yǒu. Gěi nǐ yì zhāng.", en:"Hard seats, yes. Here's one." },
        { sp:"玛丽", hz:"太好了，终于买到票了！", py:"Tài hǎo le, zhōngyú mǎi dào piào le!", en:"Great — I finally got a ticket!" },
        { sp:"售票员", hz:"另外提醒你，火车晚上八点开，最好早点儿到。", py:"Lìngwài tíxǐng nǐ, huǒchē wǎnshang bā diǎn kāi, zuìhǎo zǎo diǎnr dào.", en:"Also a reminder: the train leaves at 8 p.m., so best arrive early." },
        { sp:"玛丽", hz:"知道了，谢谢您！", py:"Zhīdào le, xièxie nín!", en:"Got it, thank you!" }
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
        { sp:"张红", hz:"明天的联欢会你表演什么节目？", py:"Míngtiān de liánhuānhuì nǐ biǎoyǎn shénme jiémù?", en:"What will you perform at tomorrow's party?" },
        { sp:"玛丽", hz:"我想唱一首中文民歌，可是怕发音不标准。", py:"Wǒ xiǎng chàng yì shǒu Zhōngwén míngē, kěshì pà fāyīn bù biāozhǔn.", en:"I want to sing a Chinese folk song, but I'm afraid my pronunciation isn't standard." },
        { sp:"张红", hz:"没关系，唱错了也没面子问题。歌词你熟悉吗？", py:"Méi guānxi, chàng cuò le yě méi miànzi wèntí. Gēcí nǐ shúxi ma?", en:"It's fine — a slip-up is no big embarrassment. Do you know the lyrics well?" },
        { sp:"玛丽", hz:"很熟悉，基本听得懂，也唱得下来。", py:"Hěn shúxi, jīběn tīng de dǒng, yě chàng de xiàlai.", en:"Very well — I basically understand them and can sing it through." },
        { sp:"张红", hz:"你是从哪儿学的这首歌？", py:"Nǐ shì cóng nǎr xué de zhè shǒu gē?", en:"Where'd you learn this song?" },
        { sp:"玛丽", hz:"从一张光盘上学的，是一首很流行的歌曲，特别好听。", py:"Cóng yì zhāng guāngpán shàng xué de, shì yì shǒu hěn liúxíng de gēqǔ, tèbié hǎotīng.", en:"From a CD — it's a very popular song, really nice." },
        { sp:"张红", hz:"那你别怕，好好儿唱！", py:"Nà nǐ bié pà, hǎohāor chàng!", en:"Then don't be nervous — sing your best!" },
        { sp:"玛丽", hz:"好。唱完联欢会我们就得收拾行李，整整一天都会很忙。", py:"Hǎo. Chàng wán liánhuānhuì wǒmen jiù děi shōushi xíngli, zhěngzhěng yì tiān dōu huì hěn máng.", en:"OK. After the party we have to pack — the whole day will be busy." },
        { sp:"张红", hz:"是啊，可是想到要回家了，还是很高兴。", py:"Shì a, kěshì xiǎng dào yào huí jiā le, háishi hěn gāoxìng.", en:"Yeah, but thinking about going home, I'm still happy." }
      ] }
  }
};

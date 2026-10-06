/* =====================================================================
   문구와 설정은 이 파일만 고치면 돼요. (코드는 건드리지 않아도 됩니다)
   1) LPL_CONFIG : 함량(%), 설문 링크, 카드 순서/사진
   2) LPL_TEXT   : 언어별 문구 (en / ja / zh / ko)
   ===================================================================== */

window.LPL_CONFIG = {
  // 처음 열릴 때 기본 언어 (폰 언어가 en/ja/zh/ko가 아니면 이 언어로 열려요)
  defaultLang: "en",

  // 이번 행사 샘플의 원료 함량(%). 숫자만 바꾸면 모든 카드와 막대가 같이 바뀌어요.
  biomassPercent: 50,

  // 언어별 설문 링크. 주소를 넣으면 버튼이 연결돼요. (비어 있으면 "준비 중" 안내가 떠요)
  // 링크 뒤에 ?src=booth&card=원료&lang=언어&viewed=본카드수 가 자동으로 붙어요.
  surveyUrl: {
    en: "https://less-plastic-life.com/survey",
    ja: "https://less-plastic-life.com/survey",
    zh: "https://less-plastic-life.com/survey",
    ko: "https://less-plastic-life.com/survey"
  },

  // "일상에서 만나는 모습" 타일에 사진을 쓸지 여부.
  // true로 바꾸면 assets/img/forms/원료-번호.jpg (예: coffee-1.jpg ~ coffee-3.jpg)를 불러오고,
  // 파일이 없는 칸은 자동으로 이모지가 나와요. 사진을 다 넣기 전에는 false로 두세요.
  formPhotos: false,

  // 카드 순서와 사진 (사진을 바꾸려면 assets/img 안의 파일을 같은 이름으로 교체)
  materials: [
    // icons : "일상에서 만나는 모습" 타일의 그림(이모지). 언어와 상관없이 같이 쓰이고, 아래 forms 순서와 맞춰져요.
    { id: "starch",  image: "assets/img/starch.jpg",  thumb: "assets/img/starch-thumb.jpg",  icons: ["🍜", "🍤", "🍮"] },
    { id: "coffee",  image: "assets/img/coffee.jpg",  thumb: "assets/img/coffee-thumb.jpg",  icons: ["☕", "🥫", "🥄"] },
    { id: "rice",    image: "assets/img/rice.jpg",    thumb: "assets/img/rice-thumb.jpg",    icons: ["🍚", "🍡", "🍘"] },
    { id: "tapioca", image: "assets/img/tapioca.jpg", thumb: "assets/img/tapioca-thumb.jpg", icons: ["🧋", "🍪", "🥣"] },
    { id: "wheat",   image: "assets/img/wheat.jpg",   thumb: "assets/img/wheat-thumb.jpg",   icons: ["🍞", "🍜", "🍺"] }
  ],

  // 뒷면의 "쓰일 수 있는 곳" 사진 줄 (모든 카드에 공통으로 나와요)
  useCases: [
    { id: "cafe",     image: "assets/img/bg-cafe.jpg",     pos: "40% 50%" },
    { id: "lunch",    image: "assets/img/bg-lunch.jpg",    pos: "52% 55%" },
    { id: "cosmetic", image: "assets/img/bg-cosmetic.jpg", pos: "38% 50%" },
    { id: "crate",    image: "assets/img/bg-crate.jpg",    pos: "62% 55%" }
  ]
};

/* 각 원료의 항목 설명
   name   : 카드 이름        inline : 문장 안에서 쓰는 이름
   intro  : 한 줄 소개       forms  : 일상에서 만나는 모습(칩, 2~3개 권장)
   story  : 3줄 — ①어디서 나오나 ②왜 버려지나 ③우리는 어떻게 쓰나(고등학생이 이해할 수 있게 원인→결과로) */
window.LPL_TEXT = {
  /* ------------------------------ English ------------------------------ */
  en: {
    ui: {
      tagline: "Less Plastic, More Value",
      hint: "Tap a card to see its story",
      close: "Close",
      prev: "Previous",
      next: "Next",
      formsLabel: "In everyday life, you meet it as",
      nowLabel: "In this sample",
      plasticLabel: "Plastic",
      nowLine: "This sample contains {pct}% {name}.",
      reduceLine: "Petroleum-based plastic use is reduced.",
      adjustLine: "The ratio can be adjusted.",
      cta: "Tell us what you think — consumer survey (10 questions)",
      useLabel: "Where our bioplastic can be used",
      uses: { cafe: "Café cups", lunch: "Food trays", cosmetic: "Cosmetic jars", crate: "Bottle crates" },
      storyLabels: ["Where it comes from", "Why it is thrown away", "What we do with it"],
      ctaSoon: "Survey link coming soon",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "Starch-based Crops", inline: "starch-based crops",
                 intro: "Starch obtained from plants.",
                 forms: ["Glass noodles", "Tempura batter", "Sauces & desserts"],
                 story: [
                   "Potatoes, corn, sweet potatoes and cassava all contain starch.",
                   "A crop can only be sold if its size, shape and condition meet market standards. Crops that fall short can't become products, so they get thrown away.",
                   "We use the starch from these overlooked crops as a raw material for our plastic. The crops get a use, and less petroleum plastic goes in."] },
      coffee:  { name: "Coffee Grounds", inline: "coffee grounds",
                 intro: "The leftover grounds after brewing coffee.",
                 forms: ["Café coffee", "Canned & bottled coffee", "Instant coffee"],
                 story: [
                   "Coffee is made by passing hot water through ground beans to draw out the flavor.",
                   "What stays behind is a pile of wet, spent grounds. Cafés and coffee factories produce them every day, but only 2.3% gets reused. Most of the rest ends up as trash.",
                   "We blend these grounds into our plastic. Waste becomes a raw material, and less petroleum plastic is needed."] },
      rice:    { name: "Rice Husk", inline: "rice husk",
                 intro: "The husk that wraps each grain of rice.",
                 forms: ["Steamed rice", "Rice cakes", "Rice crackers"],
                 story: [
                   "Each grain of rice grows wrapped in a hard outer shell, the husk.",
                   "To get the rice we eat, the husk has to be stripped off during milling. People can't eat it and it doesn't sell well, so it is left over as a by-product.",
                   "We blend this husk into our plastic. A leftover by-product becomes a raw material, and less petroleum plastic is needed."] },
      tapioca: { name: "Tapioca", inline: "tapioca starch",
                 intro: "Starch from cassava roots.",
                 forms: ["Bubble tea", "Breads & snacks", "Sauces & soups"],
                 story: [
                   "Tapioca is starch from cassava, a root crop. The chewy pearls in bubble tea are the best-known example.",
                   "Cassava that falls short of market standards for size or condition can't be sold as a product, so it is thrown away.",
                   "We use the starch from this discarded cassava as a raw material for our plastic. The roots get a use, and less petroleum plastic goes in."] },
      wheat:   { name: "Wheat Bran", inline: "wheat bran",
                 intro: "The outer layer removed when wheat is milled into flour.",
                 forms: ["Bread", "Ramen & noodles", "Beer"],
                 story: [
                   "To make smooth flour, wheat grains are milled and the tough outer layer is separated out.",
                   "That outer layer is wheat bran. Flour is the main product, and bran doesn't sell well, so it is left over as a by-product.",
                   "We blend this bran into our plastic. A leftover by-product becomes a raw material, and less petroleum plastic is needed."] }
    }
  },

  /* ------------------------------ 日本語 ------------------------------ */
  ja: {
    ui: {
      tagline: "Less Plastic, More Value",
      hint: "カードをタップしてストーリーを見る",
      close: "閉じる",
      prev: "前へ",
      next: "次へ",
      formsLabel: "日常ではこんな形で出会っています",
      nowLabel: "このサンプルでは",
      plasticLabel: "プラスチック",
      nowLine: "このサンプルには{name}が{pct}%含まれています。",
      reduceLine: "石油由来プラスチックの使用を減らします。",
      adjustLine: "配合比率は調整できます。",
      cta: "あなたの考えを聞かせてください（消費者アンケート・10問）",
      useLabel: "バイオプラスチックを活用できる場面",
      uses: { cafe: "カップ", lunch: "食品トレー", cosmetic: "化粧品容器", crate: "ボトルケース" },
      storyLabels: ["どこから出るの？", "なぜ捨てられるの？", "だから私たちは"],
      ctaSoon: "アンケートは準備中です",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "デンプン系作物", inline: "デンプン系作物",
                 intro: "植物から得られるデンプン。",
                 forms: ["春雨・麺類", "天ぷらの衣", "ソース・デザート"],
                 story: [
                   "じゃがいも、とうもろこし、さつまいも、キャッサバなどの作物には、デンプンが含まれています。",
                   "作物は、大きさ・形・状態が市場の基準に合って初めて販売できます。基準に届かないと商品にならず、捨てられてしまいます。",
                   "私たちは、こうして捨てられていた作物のデンプンをプラスチックの原料に使います。作物が活かされ、石油系プラスチックはその分少なくなります。"] },
      coffee:  { name: "コーヒーかす", inline: "コーヒーかす",
                 intro: "コーヒーを淹れたあとに残るコーヒーかす。",
                 forms: ["カフェのコーヒー", "缶・ボトルコーヒー", "インスタント"],
                 story: [
                   "コーヒーは、挽いた豆にお湯を通して、味と香りを抽出して作ります。",
                   "抽出したあとには、湿った豆のかすが残ります。これがコーヒーかすです。カフェやコーヒー工場で毎日出ますが、再利用されるのは2.3%だけ。残りの大半はごみとして捨てられています。",
                   "私たちはこのコーヒーかすをプラスチックの原料に混ぜます。ごみだったものが原料になり、石油系プラスチックはその分減ります。"] },
      rice:    { name: "もみ殻", inline: "もみ殻",
                 intro: "米粒を包んでいたもみ殻。",
                 forms: ["ごはん", "お餅", "せんべい"],
                 story: [
                   "米粒は、硬い殻に包まれて育ちます。この殻がもみ殻です。",
                   "私たちが食べる米を得るには、精米の過程でこの殻を取り除く必要があります。もみ殻は食べられず、あまり売れないため、副産物として残ります。",
                   "私たちはこのもみ殻をプラスチックの原料に混ぜます。余っていた副産物が原料になり、石油系プラスチックはその分減ります。"] },
      tapioca: { name: "タピオカ", inline: "タピオカ",
                 intro: "キャッサバの根から得られるデンプン。",
                 forms: ["タピオカドリンク", "パン・お菓子", "ソース・スープ"],
                 story: [
                   "タピオカは、キャッサバという根菜から取れるデンプンです。タピオカミルクティーのもちもちした粒が代表的です。",
                   "キャッサバも、大きさや状態が市場の基準に届かないと商品として売れず、捨てられてしまいます。",
                   "私たちは、こうして捨てられていたキャッサバのデンプンをプラスチックの原料に使います。根菜が活かされ、石油系プラスチックはその分少なくなります。"] },
      wheat:   { name: "小麦ふすま", inline: "小麦ふすま",
                 intro: "小麦を粉にするときに取り除かれる外皮、ふすま。",
                 forms: ["パン", "ラーメン・うどん", "ビール"],
                 story: [
                   "なめらかな小麦粉を作るには、小麦の粒を挽きながら、硬い外皮を取り分ける必要があります。",
                   "このとき分けられた外皮がふすまです。主役は小麦粉で、ふすまはあまり売れないため、副産物として残ります。",
                   "私たちはこのふすまをプラスチックの原料に混ぜます。余っていた副産物が原料になり、石油系プラスチックはその分減ります。"] }
    }
  },

  /* ------------------------------ 中文（简体） ------------------------------ */
  zh: {
    ui: {
      tagline: "Less Plastic, More Value",
      hint: "点击卡片，查看它的故事",
      close: "关闭",
      prev: "上一张",
      next: "下一张",
      formsLabel: "日常生活中，您会这样遇见它",
      nowLabel: "在这个样品里",
      plasticLabel: "塑料",
      nowLine: "这个样品含有{pct}%的{name}。",
      reduceLine: "有助于减少石油基塑料的用量。",
      adjustLine: "配比可以调整。",
      cta: "说说您的想法（消费者问卷·10题）",
      useLabel: "生物塑料可应用的场景",
      uses: { cafe: "咖啡杯", lunch: "餐盒", cosmetic: "化妆品容器", crate: "饮料箱" },
      storyLabels: ["从哪里来", "为什么被丢弃", "所以我们"],
      ctaSoon: "问卷链接即将开放",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "淀粉类作物", inline: "淀粉类作物",
                 intro: "从植物中提取的淀粉。",
                 forms: ["粉丝·面条", "炸物外衣", "酱汁·甜点"],
                 story: [
                   "土豆、玉米、红薯、木薯等作物中都含有淀粉。",
                   "作物的大小、形状和状态符合市场标准才能出售。达不到标准就无法成为商品，只能被丢弃。",
                   "我们把这些被丢弃作物中的淀粉用作塑料原料。作物有了用处，石油基塑料的用量也相应减少。"] },
      coffee:  { name: "咖啡渣", inline: "咖啡渣",
                 intro: "冲泡咖啡后剩下的咖啡渣。",
                 forms: ["咖啡店咖啡", "罐装·瓶装咖啡", "速溶咖啡"],
                 story: [
                   "咖啡是用热水冲过咖啡粉，萃取出风味制成的。",
                   "萃取之后会剩下湿润的咖啡渣。咖啡店和咖啡工厂每天都会产生，但只有2.3%被再利用，其余大部分被当作垃圾丢掉。",
                   "我们把这些咖啡渣混入塑料原料。垃圾变成原料，石油基塑料也相应减少。"] },
      rice:    { name: "稻壳", inline: "稻壳",
                 intro: "包裹稻谷的外壳。",
                 forms: ["米饭", "年糕", "米果"],
                 story: [
                   "稻谷的每一粒米都包裹在坚硬的外壳里，这层外壳就是稻壳。",
                   "要得到我们吃的大米，碾米时必须去掉这层外壳。稻壳不能食用，也不太好卖，只能作为副产物留下。",
                   "我们把稻壳混入塑料原料。剩下的副产物变成原料，石油基塑料也相应减少。"] },
      tapioca: { name: "木薯淀粉", inline: "木薯淀粉",
                 intro: "从木薯根中提取的淀粉。",
                 forms: ["珍珠奶茶", "面包·点心", "酱汁·汤羹"],
                 story: [
                   "木薯淀粉（Tapioca）是从木薯这种根茎作物中提取的淀粉，珍珠奶茶里软糯的珍珠就是典型例子。",
                   "木薯的大小或状态达不到市场标准时，同样无法作为商品出售，只能被丢弃。",
                   "我们把这些被丢弃木薯中的淀粉用作塑料原料。木薯有了用处，石油基塑料的用量也相应减少。"] },
      wheat:   { name: "麦麸", inline: "麦麸",
                 intro: "小麦磨成面粉时分离出来的外皮。",
                 forms: ["面包", "拉面·面条", "啤酒"],
                 story: [
                   "要做出细腻的面粉，磨小麦时必须把坚硬的外皮分离出来。",
                   "分离出的外皮就是麦麸。面粉才是主角，麦麸不太好卖，所以作为副产物留了下来。",
                   "我们把麦麸混入塑料原料。剩下的副产物变成原料，石油基塑料也相应减少。"] }
    }
  },

  /* ------------------------------ 한국어 ------------------------------ */
  ko: {
    ui: {
      tagline: "Less Plastic, More Value",
      hint: "카드를 눌러 이야기를 확인해보세요",
      close: "닫기",
      prev: "이전",
      next: "다음",
      formsLabel: "일상에서는 이런 모습으로 만나요",
      nowLabel: "이 샘플에는",
      plasticLabel: "플라스틱",
      nowLine: "이 샘플에는 {name} {pct}%가 들어 있어요.",
      reduceLine: "석유계 플라스틱 사용을 줄입니다.",
      adjustLine: "함량은 조절할 수 있어요.",
      cta: "여러분의 생각을 들려주세요 (소비자 설문 · 10문항)",
      useLabel: "우리 바이오플라스틱이 쓰일 수 있는 곳",
      uses: { cafe: "카페 컵", lunch: "식품 용기", cosmetic: "화장품 용기", crate: "음료 박스" },
      storyLabels: ["어디서 나오나요", "왜 버려지나요", "그래서 우리는"],
      ctaSoon: "설문 링크 준비 중이에요",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "전분", inline: "전분",
                 intro: "식물에서 얻는 전분",
                 forms: ["당면·면류", "튀김옷", "소스·디저트"],
                 story: [
                   "감자, 옥수수, 고구마, 카사바 같은 작물에는 전분이 들어 있어요.",
                   "작물은 크기·모양·상태가 시장 기준에 맞아야 팔 수 있어요. 기준에 못 미치면 상품이 될 수 없어서 버려져요.",
                   "우리는 이렇게 버려지던 작물의 전분을 플라스틱 원료로 써요. 작물은 쓸모를 얻고, 석유계 플라스틱은 그만큼 덜 들어가요."] },
      coffee:  { name: "커피박", inline: "커피박",
                 intro: "커피를 내리고 남은 원두 찌꺼기, 커피박",
                 forms: ["카페 커피", "캔·병 커피", "인스턴트 커피"],
                 story: [
                   "커피는 간 원두에 뜨거운 물을 통과시켜 맛과 향을 우려내 만들어요.",
                   "우려내고 나면 젖은 원두 가루가 남는데, 이게 커피박이에요. 카페와 커피 공장에서 날마다 나오지만 다시 쓰이는 건 2.3%뿐이고, 나머지 대부분은 쓰레기로 버려져요.",
                   "우리는 이 커피박을 플라스틱 원료에 섞어요. 쓰레기였던 것이 원료가 되고, 석유계 플라스틱은 그만큼 줄어요."] },
      rice:    { name: "왕겨", inline: "왕겨",
                 intro: "벼 알갱이를 감싸고 있던 껍질",
                 forms: ["밥", "떡", "쌀과자"],
                 story: [
                   "벼 낱알은 단단한 껍질에 싸여 자라요. 이 껍질이 왕겨예요.",
                   "우리가 먹는 쌀을 얻으려면 도정 과정에서 이 껍질을 벗겨내야 해요. 왕겨는 먹을 수 없고 잘 팔리지도 않아서 부산물로 남아요.",
                   "우리는 이 왕겨를 플라스틱 원료에 섞어요. 남던 부산물이 원료가 되고, 석유계 플라스틱은 그만큼 줄어요."] },
      tapioca: { name: "타피오카", inline: "타피오카",
                 intro: "카사바 뿌리에서 얻는 전분",
                 forms: ["버블티", "빵·과자", "소스·수프"],
                 story: [
                   "타피오카는 카사바라는 뿌리 작물에서 얻는 전분이에요. 버블티의 쫀득한 알갱이가 대표적이에요.",
                   "카사바도 크기나 상태가 시장 기준에 못 미치면 상품으로 팔 수 없어서 버려져요.",
                   "우리는 이렇게 버려지던 카사바의 전분을 플라스틱 원료로 써요. 뿌리는 쓸모를 얻고, 석유계 플라스틱은 그만큼 덜 들어가요."] },
      wheat:   { name: "밀기울", inline: "밀기울",
                 intro: "밀을 가루로 만들 때 분리되는 겉껍질, 밀기울",
                 forms: ["빵", "라면·국수", "맥주"],
                 story: [
                   "부드러운 밀가루를 만들려면 밀 낱알을 갈면서 단단한 겉껍질을 따로 걸러내야 해요.",
                   "이때 분리된 겉껍질이 밀기울이에요. 주인공은 밀가루이고 밀기울은 잘 팔리지 않아서 부산물로 남아요.",
                   "우리는 이 밀기울을 플라스틱 원료에 섞어요. 남던 부산물이 원료가 되고, 석유계 플라스틱은 그만큼 줄어요."] }
    }
  }
};

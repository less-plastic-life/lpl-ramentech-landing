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
    en: "",
    ja: "",
    zh: "",
    ko: ""
  },

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
   origin : 남은 것이 어떻게 버려졌는지 한 줄 */
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
      ctaSoon: "Survey link coming soon",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "Starch-based Crops", inline: "starch-based crops",
                 intro: "Starch obtained from plants.",
                 forms: ["Glass noodles", "Tempura batter", "Sauces & desserts"],
                 origin: "Crops that fell short of market standards were thrown away." },
      coffee:  { name: "Coffee Grounds", inline: "coffee grounds",
                 intro: "The leftover grounds after brewing coffee.",
                 forms: ["Café coffee", "Canned & bottled coffee", "Instant coffee"],
                 origin: "The grounds left behind were thrown away as waste." },
      rice:    { name: "Rice Husk", inline: "rice husk",
                 intro: "The husk that wraps each grain of rice.",
                 forms: ["Steamed rice", "Rice cakes", "Rice crackers"],
                 origin: "The husk left after milling is a by-product." },
      tapioca: { name: "Tapioca", inline: "tapioca starch",
                 intro: "Starch from cassava roots.",
                 forms: ["Bubble tea", "Breads & snacks", "Sauces & soups"],
                 origin: "Cassava that fell short of market standards was thrown away." },
      wheat:   { name: "Wheat Bran", inline: "wheat bran",
                 intro: "The outer layer removed when wheat is milled into flour.",
                 forms: ["Bread", "Ramen & noodles", "Beer"],
                 origin: "The outer layer left after milling is a by-product." }
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
      ctaSoon: "アンケートは準備中です",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "デンプン系作物", inline: "デンプン系作物",
                 intro: "植物から得られるデンプン。",
                 forms: ["春雨・麺類", "天ぷらの衣", "ソース・デザート"],
                 origin: "規格に合わない作物は捨てられていました。" },
      coffee:  { name: "コーヒーかす", inline: "コーヒーかす",
                 intro: "コーヒーを淹れたあとに残るコーヒーかす。",
                 forms: ["カフェのコーヒー", "缶・ボトルコーヒー", "インスタント"],
                 origin: "残ったかすは、ごみとして捨てられていました。" },
      rice:    { name: "もみ殻", inline: "もみ殻",
                 intro: "米粒を包んでいたもみ殻。",
                 forms: ["ごはん", "お餅", "せんべい"],
                 origin: "精米のあとに残るもみ殻は、副産物でした。" },
      tapioca: { name: "タピオカ", inline: "タピオカ",
                 intro: "キャッサバの根から得られるデンプン。",
                 forms: ["タピオカドリンク", "パン・お菓子", "ソース・スープ"],
                 origin: "規格に合わないキャッサバは捨てられていました。" },
      wheat:   { name: "小麦ふすま", inline: "小麦ふすま",
                 intro: "小麦を粉にするときに取り除かれる外皮、ふすま。",
                 forms: ["パン", "ラーメン・うどん", "ビール"],
                 origin: "製粉のあとに残る外皮は、副産物でした。" }
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
      ctaSoon: "问卷链接即将开放",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "淀粉类作物", inline: "淀粉类作物",
                 intro: "从植物中提取的淀粉。",
                 forms: ["粉丝·面条", "炸物外衣", "酱汁·甜点"],
                 origin: "不符合规格的作物被丢弃了。" },
      coffee:  { name: "咖啡渣", inline: "咖啡渣",
                 intro: "冲泡咖啡后剩下的咖啡渣。",
                 forms: ["咖啡店咖啡", "罐装·瓶装咖啡", "速溶咖啡"],
                 origin: "剩下的咖啡渣曾被当作垃圾丢掉。" },
      rice:    { name: "稻壳", inline: "稻壳",
                 intro: "包裹稻谷的外壳。",
                 forms: ["米饭", "年糕", "米果"],
                 origin: "碾米后留下的稻壳是副产物。" },
      tapioca: { name: "木薯淀粉", inline: "木薯淀粉",
                 intro: "从木薯根中提取的淀粉。",
                 forms: ["珍珠奶茶", "面包·点心", "酱汁·汤羹"],
                 origin: "不符合规格的木薯曾被丢弃。" },
      wheat:   { name: "麦麸", inline: "麦麸",
                 intro: "小麦磨成面粉时分离出来的外皮。",
                 forms: ["面包", "拉面·面条", "啤酒"],
                 origin: "磨粉后剩下的外皮是副产物。" }
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
      ctaSoon: "설문 링크 준비 중이에요",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "전분", inline: "전분",
                 intro: "식물에서 얻는 전분",
                 forms: ["당면·면류", "튀김옷", "소스·디저트"],
                 origin: "상품성이 떨어지는 작물은 버려졌어요." },
      coffee:  { name: "커피박", inline: "커피박",
                 intro: "커피를 내리고 남은 원두 찌꺼기, 커피박",
                 forms: ["카페 커피", "캔·병 커피", "인스턴트 커피"],
                 origin: "남은 찌꺼기는 쓰레기로 버려졌어요." },
      rice:    { name: "왕겨", inline: "왕겨",
                 intro: "벼 알갱이를 감싸고 있던 껍질",
                 forms: ["밥", "떡", "쌀과자"],
                 origin: "도정하고 남은 껍질은 부산물로 남았어요." },
      tapioca: { name: "타피오카", inline: "타피오카",
                 intro: "카사바 뿌리에서 얻는 전분",
                 forms: ["버블티", "빵·과자", "소스·수프"],
                 origin: "상품성이 떨어지는 카사바는 버려졌어요." },
      wheat:   { name: "밀기울", inline: "밀기울",
                 intro: "밀을 가루로 만들 때 분리되는 겉껍질, 밀기울",
                 forms: ["빵", "라면·국수", "맥주"],
                 origin: "제분하고 남은 겉껍질은 부산물이에요." }
    }
  }
};

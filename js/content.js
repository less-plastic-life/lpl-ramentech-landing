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
  // 링크 뒤에 ?src=booth&card=원료&lang=언어 가 자동으로 붙어요.
  surveyUrl: {
    en: "",
    ja: "",
    zh: "",
    ko: ""
  },

  // 카드 순서와 사진 (사진을 바꾸려면 assets/img 안의 파일을 같은 이름으로 교체)
  materials: [
    { id: "starch",  image: "assets/img/starch.jpg",  thumb: "assets/img/starch-thumb.jpg" },
    { id: "coffee",  image: "assets/img/coffee.jpg",  thumb: "assets/img/coffee-thumb.jpg" },
    { id: "rice",    image: "assets/img/rice.jpg",    thumb: "assets/img/rice-thumb.jpg" },
    { id: "tapioca", image: "assets/img/tapioca.jpg", thumb: "assets/img/tapioca-thumb.jpg" },
    { id: "wheat",   image: "assets/img/wheat.jpg",   thumb: "assets/img/wheat-thumb.jpg" }
  ]
};

window.LPL_TEXT = {
  /* ------------------------------ English ------------------------------ */
  en: {
    ui: {
      tagline: "Less Plastic, More Value",
      hint: "Tap a card to see its story",
      close: "Close",
      prev: "Previous",
      next: "Next",
      originLabel: "Once discarded",
      nowLabel: "In this sample",
      plasticLabel: "Plastic",
      nowLine: "This sample contains {pct}% {name}.",
      reduceLine: "Petroleum-based plastic use is reduced.",
      adjustLine: "The ratio can be adjusted.",
      cta: "Same conditions — would you choose the eco-friendly one? Take the survey",
      ctaSoon: "Survey link coming soon",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "Starch-based Crops", inline: "starch-based crops",
                 intro: "Starch from plants such as potatoes, sweet potatoes and corn.",
                 origin: "Crops that fell short of market standards and would have been thrown away." },
      coffee:  { name: "Coffee Grounds", inline: "coffee grounds",
                 intro: "The leftover grounds after brewing coffee.",
                 origin: "Left over every day at cafés and treated as waste." },
      rice:    { name: "Rice Husk", inline: "rice husk",
                 intro: "The husk that wraps each grain of rice.",
                 origin: "A by-product of rice milling that was hard to put to use." },
      tapioca: { name: "Tapioca", inline: "tapioca starch",
                 intro: "Starch from cassava roots.",
                 origin: "Cassava that fell short of market standards and would have been discarded." },
      wheat:   { name: "Wheat Bran", inline: "wheat bran",
                 intro: "The outer layer removed when wheat is milled into flour.",
                 origin: "A by-product left over after making flour." }
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
      originLabel: "かつては捨てられていたもの",
      nowLabel: "このサンプルでは",
      plasticLabel: "プラスチック",
      nowLine: "このサンプルには{name}が{pct}%含まれています。",
      reduceLine: "石油由来プラスチックの使用を減らします。",
      adjustLine: "配合比率は調整できます。",
      cta: "同じ条件なら、環境に配慮した製品を選びますか？アンケートに回答する",
      ctaSoon: "アンケートは準備中です",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "デンプン系作物", inline: "デンプン系作物",
                 intro: "じゃがいも・さつまいも・とうもろこしなど、植物から得られるデンプン。",
                 origin: "規格外で廃棄されるはずだった作物。" },
      coffee:  { name: "コーヒーかす", inline: "コーヒーかす",
                 intro: "コーヒーを淹れたあとに残るコーヒーかす。",
                 origin: "カフェで毎日出て、ごみとして捨てられていたもの。" },
      rice:    { name: "もみ殻", inline: "もみ殻",
                 intro: "米粒を包んでいたもみ殻。",
                 origin: "精米の際に出る、使い道が見つかりにくかった副産物。" },
      tapioca: { name: "タピオカ", inline: "タピオカ（キャッサバ由来デンプン）",
                 intro: "キャッサバの根から得られるデンプン。",
                 origin: "規格外で廃棄されるはずだったキャッサバ。" },
      wheat:   { name: "小麦ふすま", inline: "小麦ふすま",
                 intro: "小麦を粉にするときに取り除かれる外皮、ふすま。",
                 origin: "小麦粉を作ったあとに残る副産物。" }
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
      originLabel: "曾经被丢弃",
      nowLabel: "在这个样品里",
      plasticLabel: "塑料",
      nowLine: "这个样品含有{pct}%的{name}。",
      reduceLine: "有助于减少石油基塑料的使用。",
      adjustLine: "配比可以调整。",
      cta: "条件相同，您会选择环保产品吗？参与问卷",
      ctaSoon: "问卷链接即将开放",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "淀粉类作物", inline: "淀粉类作物",
                 intro: "从土豆、红薯、玉米等植物中提取的淀粉。",
                 origin: "因规格不达标而被丢弃的农作物。" },
      coffee:  { name: "咖啡渣", inline: "咖啡渣",
                 intro: "冲泡咖啡后剩下的咖啡渣。",
                 origin: "每天在咖啡店产生、被当作垃圾丢弃的东西。" },
      rice:    { name: "稻壳", inline: "稻壳",
                 intro: "包裹稻谷的外壳。",
                 origin: "碾米时产生、难以找到用途的副产物。" },
      tapioca: { name: "木薯淀粉", inline: "木薯淀粉",
                 intro: "从木薯根中提取的淀粉。",
                 origin: "因规格不达标而被丢弃的木薯。" },
      wheat:   { name: "麦麸", inline: "麦麸",
                 intro: "小麦磨成面粉时分离出来的外皮。",
                 origin: "制作面粉后剩下的副产物。" }
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
      originLabel: "원래는 버려지던",
      nowLabel: "이 샘플에는",
      plasticLabel: "플라스틱",
      nowLine: "이 샘플에는 {name} {pct}%가 들어 있어요.",
      reduceLine: "석유계 플라스틱 사용을 줄입니다.",
      adjustLine: "함량은 조절할 수 있어요.",
      cta: "같은 조건이라면, 친환경 제품을 고르시겠어요? 설문 참여하기",
      ctaSoon: "설문 링크 준비 중이에요",
      event: "RAMEN TECH 2026"
    },
    materials: {
      starch:  { name: "전분", inline: "전분",
                 intro: "감자·고구마·옥수수 같은 식물에서 얻는 전분",
                 origin: "상품성이 떨어져 버려지던 작물" },
      coffee:  { name: "커피박", inline: "커피박",
                 intro: "커피를 내리고 남은 원두 찌꺼기, 커피박",
                 origin: "카페에서 매일 쓰레기로 나오던 것" },
      rice:    { name: "왕겨", inline: "왕겨",
                 intro: "벼 알갱이를 감싸고 있던 껍질",
                 origin: "쌀을 만들고 남아 쓰임새를 찾기 어려웠던 부산물" },
      tapioca: { name: "타피오카", inline: "타피오카",
                 intro: "카사바 뿌리에서 얻는 전분",
                 origin: "상품성이 떨어져 버려지던 카사바" },
      wheat:   { name: "밀기울", inline: "밀기울",
                 intro: "밀을 가루로 만들 때 분리되는 겉껍질, 밀기울",
                 origin: "밀가루가 되고 남은 부산물" }
    }
  }
};

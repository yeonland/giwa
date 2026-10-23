// 카드 데이터. 나중에 노션에서 내보낸 JSON으로 교체 (window.TERMS = 뒤만 바꾸면 됨)
// shortcut: file:// 에서 fetch가 막혀서 .js로 감쌈, Astro로 옮길 때 terms.json으로 분리
window.TERMS = [
  {
    "id": "term-cheseong",
    "entity": "term",
    "title": { "ko": "체성", "en": "Cheseong (main wall body)" },
    "hanja": "體城",
    "aliases": { "ko": ["성벽"], "en": ["curtain wall"] },
    "summary": {
      "ko": "성을 이루는 성벽의 몸체. 치, 옹성, 여장 같은 시설이 여기에 붙는다.",
      "en": "The main body of the fortress wall, to which features such as chi, ongseong and yeojang are attached."
    },
    "howToSpot": {
      "ko": "성을 한 바퀴 두르는 가장 긴 벽. 돌출부나 문을 뺀 나머지 전부.",
      "en": "The longest continuous wall enclosing the fortress, excluding projections and gates."
    },
    "tags": { "type": ["fortress"], "function": ["defense"] },
    "relations": [],
    "dispute": null,
    "sources": ["한국성곽사전 (확인 필요)"]
  },
  {
    "id": "term-chi",
    "entity": "term",
    "title": { "ko": "치", "en": "Chi (projecting wall section)" },
    "hanja": "雉",
    "aliases": { "ko": ["치성"], "en": [] },
    "summary": {
      "ko": "성벽 바깥으로 돌출시킨 시설. 성벽에 붙은 적을 옆에서 공격한다.",
      "en": "A section projecting outward from the wall, used to attack enemies at the wall from the side."
    },
    "howToSpot": {
      "ko": "성벽 바깥쪽으로 네모나게 튀어나온 부분. 일정 간격으로 반복된다.",
      "en": "Square bumps sticking out from the outer face of the wall, repeated at intervals."
    },
    "tags": { "type": ["fortress"], "function": ["defense"] },
    "relations": [
      { "type": "part-of", "target": "term-cheseong" },
      { "type": "compare", "target": "term-ongseong" }
    ],
    "dispute": null,
    "sources": ["한국성곽사전 (확인 필요)"]
  },
  {
    "id": "term-ongseong",
    "entity": "term",
    "title": { "ko": "옹성", "en": "Ongseong (gate-protecting enclosure wall)" },
    "hanja": "甕城",
    "aliases": { "ko": [], "en": [] },
    "summary": {
      "ko": "성문 바깥을 한 겹 더 둘러싼 벽. 적이 성문에 곧바로 닿지 못하게 한다.",
      "en": "An extra wall enclosing the outside of a gate so enemies cannot reach the gate directly."
    },
    "howToSpot": {
      "ko": "성문 앞을 반원이나 네모로 감싼 벽. 들어가려면 옆으로 돌아야 한다.",
      "en": "A semicircular or square wall wrapped around the front of a gate; you must turn sideways to enter."
    },
    "tags": { "type": ["fortress"], "function": ["defense"] },
    "relations": [
      { "type": "part-of", "target": "term-cheseong" },
      { "type": "compare", "target": "term-chi" }
    ],
    "dispute": null,
    "sources": ["한국성곽사전 (확인 필요)"]
  },
  {
    "id": "term-haeja",
    "entity": "term",
    "title": { "ko": "해자", "en": "Haeja (moat)" },
    "hanja": "垓子",
    "aliases": { "ko": ["호"], "en": ["moat"] },
    "summary": {
      "ko": "성 바깥을 둘러 판 도랑이나 못. 적이 성벽에 다가오기 어렵게 한다.",
      "en": "A ditch or pond dug around the outside of the fortress to keep enemies away from the wall."
    },
    "howToSpot": {
      "ko": "성벽에서 조금 떨어져 나란히 도는 물길이나 움푹한 띠. 지금은 메워진 곳이 많다.",
      "en": "A water channel or sunken band running parallel to the wall at a distance; often filled in today."
    },
    "tags": { "type": ["fortress"], "function": ["defense"] },
    "relations": [{ "type": "compare", "target": "term-cheseong" }],
    "dispute": null,
    "sources": ["한국성곽사전 (확인 필요)"]
  },
  {
    "id": "term-yeojang",
    "entity": "term",
    "title": { "ko": "여장", "en": "Yeojang (crenellated parapet)" },
    "hanja": "女墻",
    "aliases": { "ko": ["성가퀴", "타"], "en": ["parapet", "battlement"] },
    "summary": {
      "ko": "성벽 위에 덧쌓은 낮은 담. 몸을 숨기고 총안으로 공격한다.",
      "en": "A low wall built on top of the fortress wall, for cover and for firing through loopholes."
    },
    "howToSpot": {
      "ko": "성벽 맨 위, 일정 간격으로 끊긴 낮은 담과 구멍(총안)",
      "en": "Low, regularly broken walls with holes (loopholes) along the very top of the wall."
    },
    "tags": { "type": ["fortress"], "function": ["defense"], "period": ["joseon"] },
    "relations": [
      { "type": "part-of", "target": "term-cheseong" },
      { "type": "compare", "target": "term-chi" }
    ],
    "dispute": null,
    "sources": ["남한산성 세계유산센터 자료"]
  }
];

const { some, first } = require("lodash");

var json = [
  {
    keyword: "小鹏汽车",
    children: [
      {
        keyword: ["小鹏p7", "小鹏g3", "小鹏汽车"],
        type: "all",
        date: "2021-04-05",
        index: "9301",
      },
      {
        keyword: ["小鹏p7", "小鹏g3", "小鹏汽车"],
        type: "all",
        date: "2021-04-06",
        index: "10314",
      },
      {
        keyword: ["小鹏p7", "小鹏g3", "小鹏汽车"],
        type: "all",
        date: "2021-04-07",
        index: "10792",
      },
      {
        keyword: ["小鹏p7", "小鹏g3", "小鹏汽车"],
        type: "all",
        date: "2021-04-08",
        index: "10003",
      },
      {
        keyword: ["小鹏p7", "小鹏g3", "小鹏汽车"],
        type: "all",
        date: "2021-04-09",
        index: "11069",
      },
      {
        keyword: ["小鹏p7", "小鹏g3", "小鹏汽车"],
        type: "all",
        date: "2021-04-10",
        index: "10876",
      },
      {
        keyword: ["小鹏p7", "小鹏g3", "小鹏汽车"],
        type: "all",
        date: "2021-04-11",
        index: "11048",
      },
    ],
  },
  {
    keyword: "小鹏汽车",
    children: [
      {
        keyword: ["小鹏"],
        type: "all",
        date: "2021-04-05",
        index: "4480",
      },
      {
        keyword: ["小鹏"],
        type: "all",
        date: "2021-04-06",
        index: "5067",
      },
      {
        keyword: ["小鹏"],
        type: "all",
        date: "2021-04-07",
        index: "4939",
      },
      {
        keyword: ["小鹏"],
        type: "all",
        date: "2021-04-08",
        index: "4288",
      },
      {
        keyword: ["小鹏"],
        type: "all",
        date: "2021-04-09",
        index: "4427",
      },
      {
        keyword: ["小鹏"],
        type: "all",
        date: "2021-04-10",
        index: "4492",
      },
      {
        keyword: ["小鹏"],
        type: "all",
        date: "2021-04-11",
        index: "4826",
      },
    ],
  },
  {
    keyword: "爱驰汽车",
    children: [
      {
        keyword: ["爱驰汽车"],
        type: "all",
        date: "2021-04-05",
        index: "558",
      },
      {
        keyword: ["爱驰汽车"],
        type: "all",
        date: "2021-04-06",
        index: "747",
      },
      {
        keyword: ["爱驰汽车"],
        type: "all",
        date: "2021-04-07",
        index: "742",
      },
      {
        keyword: ["爱驰汽车"],
        type: "all",
        date: "2021-04-08",
        index: "780",
      },
      {
        keyword: ["爱驰汽车"],
        type: "all",
        date: "2021-04-09",
        index: "637",
      },
      {
        keyword: ["爱驰汽车"],
        type: "all",
        date: "2021-04-10",
        index: "442",
      },
      {
        keyword: ["爱驰汽车"],
        type: "all",
        date: "2021-04-11",
        index: "508",
      },
    ],
  },
  {
    keyword: "理想汽车",
    children: [
      {
        keyword: ["车和家", "理想one", "理想智造"],
        type: "all",
        date: "2021-04-05",
        index: "19758",
      },
      {
        keyword: ["车和家", "理想one", "理想智造"],
        type: "all",
        date: "2021-04-06",
        index: "19402",
      },
      {
        keyword: ["车和家", "理想one", "理想智造"],
        type: "all",
        date: "2021-04-07",
        index: "16374",
      },
      {
        keyword: ["车和家", "理想one", "理想智造"],
        type: "all",
        date: "2021-04-08",
        index: "14282",
      },
      {
        keyword: ["车和家", "理想one", "理想智造"],
        type: "all",
        date: "2021-04-09",
        index: "16251",
      },
      {
        keyword: ["车和家", "理想one", "理想智造"],
        type: "all",
        date: "2021-04-10",
        index: "16861",
      },
      {
        keyword: ["车和家", "理想one", "理想智造"],
        type: "all",
        date: "2021-04-11",
        index: "18528",
      },
    ],
  },
  {
    keyword: "理想汽车",
    children: [
      {
        keyword: ["理想汽车"],
        type: "all",
        date: "2021-04-05",
        index: "16528",
      },
      {
        keyword: ["理想汽车"],
        type: "all",
        date: "2021-04-06",
        index: "16572",
      },
      {
        keyword: ["理想汽车"],
        type: "all",
        date: "2021-04-07",
        index: "15360",
      },
      {
        keyword: ["理想汽车"],
        type: "all",
        date: "2021-04-08",
        index: "12532",
      },
      {
        keyword: ["理想汽车"],
        type: "all",
        date: "2021-04-09",
        index: "14026",
      },
      {
        keyword: ["理想汽车"],
        type: "all",
        date: "2021-04-10",
        index: "13630",
      },
      {
        keyword: ["理想汽车"],
        type: "all",
        date: "2021-04-11",
        index: "14195",
      },
    ],
  },
  {
    keyword: "天际汽车",
    children: [
      {
        keyword: ["天际汽车"],
        type: "all",
        date: "2021-04-05",
        index: "678",
      },
      {
        keyword: ["天际汽车"],
        type: "all",
        date: "2021-04-06",
        index: "996",
      },
      {
        keyword: ["天际汽车"],
        type: "all",
        date: "2021-04-07",
        index: "980",
      },
      {
        keyword: ["天际汽车"],
        type: "all",
        date: "2021-04-08",
        index: "999",
      },
      {
        keyword: ["天际汽车"],
        type: "all",
        date: "2021-04-09",
        index: "839",
      },
      {
        keyword: ["天际汽车"],
        type: "all",
        date: "2021-04-10",
        index: "648",
      },
      {
        keyword: ["天际汽车"],
        type: "all",
        date: "2021-04-11",
        index: "993",
      },
    ],
  },
  {
    keyword: "零跑汽车",
    children: [
      {
        keyword: ["零跑", "零跑汽车"],
        type: "all",
        date: "2021-04-05",
        index: "3848",
      },
      {
        keyword: ["零跑", "零跑汽车"],
        type: "all",
        date: "2021-04-06",
        index: "4389",
      },
      {
        keyword: ["零跑", "零跑汽车"],
        type: "all",
        date: "2021-04-07",
        index: "3865",
      },
      {
        keyword: ["零跑", "零跑汽车"],
        type: "all",
        date: "2021-04-08",
        index: "4274",
      },
      {
        keyword: ["零跑", "零跑汽车"],
        type: "all",
        date: "2021-04-09",
        index: "4329",
      },
      {
        keyword: ["零跑", "零跑汽车"],
        type: "all",
        date: "2021-04-10",
        index: "3291",
      },
      {
        keyword: ["零跑", "零跑汽车"],
        type: "all",
        date: "2021-04-11",
        index: "3644",
      },
    ],
  },
  {
    keyword: "哪吒汽车",
    children: [
      {
        keyword: ["哪吒汽车", "合众汽车", "合众新能源"],
        type: "all",
        date: "2021-04-05",
        index: "7912",
      },
      {
        keyword: ["哪吒汽车", "合众汽车", "合众新能源"],
        type: "all",
        date: "2021-04-06",
        index: "8295",
      },
      {
        keyword: ["哪吒汽车", "合众汽车", "合众新能源"],
        type: "all",
        date: "2021-04-07",
        index: "8120",
      },
      {
        keyword: ["哪吒汽车", "合众汽车", "合众新能源"],
        type: "all",
        date: "2021-04-08",
        index: "7552",
      },
      {
        keyword: ["哪吒汽车", "合众汽车", "合众新能源"],
        type: "all",
        date: "2021-04-09",
        index: "7637",
      },
      {
        keyword: ["哪吒汽车", "合众汽车", "合众新能源"],
        type: "all",
        date: "2021-04-10",
        index: "7343",
      },
      {
        keyword: ["哪吒汽车", "合众汽车", "合众新能源"],
        type: "all",
        date: "2021-04-11",
        index: "8162",
      },
    ],
  },
  {
    keyword: "威马汽车",
    children: [
      {
        keyword: ["威马", "威马汽车"],
        type: "all",
        date: "2021-04-05",
        index: "15779",
      },
      {
        keyword: ["威马", "威马汽车"],
        type: "all",
        date: "2021-04-06",
        index: "19975",
      },
      {
        keyword: ["威马", "威马汽车"],
        type: "all",
        date: "2021-04-07",
        index: "18112",
      },
      {
        keyword: ["威马", "威马汽车"],
        type: "all",
        date: "2021-04-08",
        index: "18091",
      },
      {
        keyword: ["威马", "威马汽车"],
        type: "all",
        date: "2021-04-09",
        index: "15100",
      },
      {
        keyword: ["威马", "威马汽车"],
        type: "all",
        date: "2021-04-10",
        index: "14627",
      },
      {
        keyword: ["威马", "威马汽车"],
        type: "all",
        date: "2021-04-11",
        index: "14212",
      },
    ],
  },
  {
    keyword: "蔚来",
    children: [
      {
        keyword: ["蔚来es8", "es8", "es6"],
        type: "all",
        date: "2021-04-05",
        index: "3205",
      },
      {
        keyword: ["蔚来es8", "es8", "es6"],
        type: "all",
        date: "2021-04-06",
        index: "4868",
      },
      {
        keyword: ["蔚来es8", "es8", "es6"],
        type: "all",
        date: "2021-04-07",
        index: "4897",
      },
      {
        keyword: ["蔚来es8", "es8", "es6"],
        type: "all",
        date: "2021-04-08",
        index: "4854",
      },
      {
        keyword: ["蔚来es8", "es8", "es6"],
        type: "all",
        date: "2021-04-09",
        index: "4268",
      },
      {
        keyword: ["蔚来es8", "es8", "es6"],
        type: "all",
        date: "2021-04-10",
        index: "3423",
      },
      {
        keyword: ["蔚来es8", "es8", "es6"],
        type: "all",
        date: "2021-04-11",
        index: "3235",
      },
    ],
  },
  {
    keyword: "蔚来",
    children: [
      {
        keyword: ["蔚来", "蔚来汽车", "nio"],
        type: "all",
        date: "2021-04-05",
        index: "12737",
      },
      {
        keyword: ["蔚来", "蔚来汽车", "nio"],
        type: "all",
        date: "2021-04-06",
        index: "15282",
      },
      {
        keyword: ["蔚来", "蔚来汽车", "nio"],
        type: "all",
        date: "2021-04-07",
        index: "16193",
      },
      {
        keyword: ["蔚来", "蔚来汽车", "nio"],
        type: "all",
        date: "2021-04-08",
        index: "28084",
      },
      {
        keyword: ["蔚来", "蔚来汽车", "nio"],
        type: "all",
        date: "2021-04-09",
        index: "16717",
      },
      {
        keyword: ["蔚来", "蔚来汽车", "nio"],
        type: "all",
        date: "2021-04-10",
        index: "17860",
      },
      {
        keyword: ["蔚来", "蔚来汽车", "nio"],
        type: "all",
        date: "2021-04-11",
        index: "15521",
      },
    ],
  },
  {
    keyword: "恒驰",
    children: [
      {
        keyword: ["恒驰"],
        type: "all",
        date: "2021-04-05",
        index: "725",
      },
      {
        keyword: ["恒驰"],
        type: "all",
        date: "2021-04-06",
        index: "991",
      },
      {
        keyword: ["恒驰"],
        type: "all",
        date: "2021-04-07",
        index: "990",
      },
      {
        keyword: ["恒驰"],
        type: "all",
        date: "2021-04-08",
        index: "788",
      },
      {
        keyword: ["恒驰"],
        type: "all",
        date: "2021-04-09",
        index: "672",
      },
      {
        keyword: ["恒驰"],
        type: "all",
        date: "2021-04-10",
        index: "634",
      },
      {
        keyword: ["恒驰"],
        type: "all",
        date: "2021-04-11",
        index: "525",
      },
    ],
  },
  {
    keyword: "华人运通",
    children: [
      {
        keyword: ["华人运通"],
        type: "all",
        date: "2021-04-05",
        index: "1329",
      },
      {
        keyword: ["华人运通"],
        type: "all",
        date: "2021-04-06",
        index: "1790",
      },
      {
        keyword: ["华人运通"],
        type: "all",
        date: "2021-04-07",
        index: "1608",
      },
      {
        keyword: ["华人运通"],
        type: "all",
        date: "2021-04-08",
        index: "1524",
      },
      {
        keyword: ["华人运通"],
        type: "all",
        date: "2021-04-09",
        index: "1382",
      },
      {
        keyword: ["华人运通"],
        type: "all",
        date: "2021-04-10",
        index: "1200",
      },
      {
        keyword: ["华人运通"],
        type: "all",
        date: "2021-04-11",
        index: "1375",
      },
    ],
  },
];

let a = json.reduce((current, next) => {
  let count = next.children.reduce((childCurrent, childNext) => {
    return childCurrent + parseInt(childNext.index);
  }, 0);
  current.set(next.keyword, count);
  return current;
}, new Map());
console.log(a);


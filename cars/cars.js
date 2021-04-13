const json = require("./result.json");
const { outputJson } = require("../outputFs");
const _ = require("lodash");


let result =  json.map(item=>{
  let temp = {
    name:item.name,
    sub:item.sub.map(_item=>{
      let sub =  _.uniq(_item.sub.map(item=>item.name))
      return {
        name:_item.name,
        sub
      }
    })
  }
  return temp
});
outputJson("res", result);

// let data = [
//   "凯美瑞",
//   "汉兰达",
//   "雷凌",
//   "威兰达",
//   "YARiS L 致炫",
//   "丰田C-HR",
//   "YARiS L 致享",
//   "雅力士",
//   "逸致",
//   "凯美瑞",
//   "雷凌",
//   "威兰达"
// ]
// console.log(_.uniq(data));
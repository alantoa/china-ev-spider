const json = require("./result.json");
const { outputJson } = require("../outputFs");
const _ = require("lodash");

let result = json.map((item) => {
  let temp = {
    name: item.name,
    sub: item.sub.map((_item) => {
      let sub = _.uniq(_item.sub.map((item) => item.name));
      return {
        name: _item.name,
        sub,
      };
    }),
  };
  return temp;
});
outputJson("res", result);

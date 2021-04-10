const got = require("got");
const targetUrl = "https://www.nio.cn/nio-places";
const cheerio = require("cheerio");
const { outputJson } = require("../outputFs");
async function getRes() {
  try {
    const { body: htmlBody } = await got(targetUrl);
    const $ = cheerio.load(htmlBody);
    const citys = $(".nio-places--city");
    let json = [];
    for (let city of citys) {
      let url = $(city).find("a").attr("href");
      const cityUrl = `https://www.nio.cn/${url}`;
      const { body: cityBody } = await got(cityUrl);
      const _$ = cheerio.load(cityBody);
      let cityTile = _$(".city-tile");
      let info = {};
      for (let item of cityTile) {
        info.pic = _$(item).find(".city-tile--image img").attr("src");
        info.type = _$(item).find(".city-tile--type").text();
        info.alias = _$(item).find("h4:not(.city-tile--type)").text();
        info.adress = _$(item).find(".city-tile--details").text();
      }
      json.push(info);
    }
    let finalJson = [];
    for (let item of json) {
      var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
      var objExp = new RegExp(Expression);
      finalJson.push({
        store_id: "",
        pic: objExp.test(item.cover)
          ? item.cover
          : `https://www.nio.cn${item.cover}`,
        store_name: `${item.alias} ${item.type}`,
        store_address: item.alias,
        address: item.address,
        opened_at: "",
        store_status: 1,
        type: "1",
        brand: "蔚来",
        original_data: JSON.stringify(item),
      });
      outputJson('nio',finalJson)
    }
  } catch (e) {
    console.error(`蔚来门店信息爬取失败！${e}`);
  }
}
getRes();

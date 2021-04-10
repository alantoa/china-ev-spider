const got = require("got");
const { outputJson } = require("../outputFs");
const targetUrl = "https://www.tesla.cn/cua-api/tesla-locations?map=baidu";
async function getRes() {
  try {
    let { body } = await got(targetUrl);
    let storeJson = [];
    for (let item of JSON.parse(body)) {
      if (item.location_type.includes("store")) {
        storeJson.push(item);
      }
    }
    let finalJson = [];

    for (let _item of storeJson) {
      let { body: info } = await got(
        `https://www.tesla.cn/cua-api/tesla-location?id=${_item.location_id}&map=baidu`
      );
      let item = JSON.parse(info);
      finalJson.push({
        store_id: item.location_id,
        pic: "",
        store_name: item.title,
        store_address: item.title,
        address: item.address,
        opened_at: "",
        store_status: 1,
        type: item.location_type.join(","),
        brand: "特斯拉",
        original_data: item,
      });
    }
    outputJson('tesla',finalJson)
  } catch (e) {
    console.error(`特斯拉门店信息爬取失败！${e}`);
  }
}
getRes();

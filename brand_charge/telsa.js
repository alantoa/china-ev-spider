const got = require("got");
const { outputJson } = require("../outputFs");
const targetUrl = "https://www.tesla.cn/cua-api/tesla-locations?map=baidu";
async function getRes() {
  try {
    console.time("tesla-charge");
    let { body } = await got(targetUrl);
    console.log(body);
    let storeJson = [];
    for (let item of JSON.parse(body)) {
      if (
        item.location_type.includes("supercharger") ||
        item.location_type.includes("standard charger")
      ) {
        storeJson.push(item);
      }
    }
    let finalJson = [];
    let i = 1;
    for (let _item of storeJson) {
      let { body: info } = await got(
        `https://www.tesla.cn/cua-api/tesla-location?id=${_item.location_id}&map=baidu`
      );
      let item = JSON.parse(info);
      i++;
      finalJson.push(item);
    }
    for (let item of finalJson) {
      var regex = /\d+?个/;
      let match = item.chargers && item.chargers.match(regex);
      let total;
      if (match) {
        total = match[0] && match[0].split("个")[0];
        total = parseInt(total);
      }
      finalJson.push({
        location_id: item.location_id,
        lat: item.baidu_lat,
        lng: item.baidu_lng,
        brand: "特斯拉",
        title: item.title,
        total: total,
        address: item.address,
        city: item.city,
        open_soon: item.open_soon,
        type: item.location_type ? item.location_type.join(",") : "",
        original_data: item,
      });
    }
    outputJson("tesla", finalJson);
    console.timeEnd("tesla-charge");
  } catch (e) {
    console.error(`特斯拉充电桩信息爬取失败！${e}`);
  }
}
getRes();

const got = require("got");
const targetUrl =
  "https://api-web.lixiang.com/mall-unit-api/v1-0/service-centers?types=RETAIL%2CDELIVER%2CAFTERSALE%2CSPRAY%2CTEMPORARY_EXHIBITION%2CTEMPORARY_AFTERSALE_SUPPORT&sortType=CITY&storeEffectiveStatus=";

async function getRes() {
  try {
    const { body } = await got(targetUrl);
    const json = JSON.parse(body).data;
    let finalJson = [];
    for (let item of json) {
      finalJson.push({
        store_id: item.id,
        pic: item.imgUrl,
        store_name: item.name,
        store_address: item.name,
        address: item.address,
        opened_at: item.openedAt,
        store_status: item.status === "INBUSINESS" ? 1 : 0,
        type: item.type,
        brand: "理想",
        original_data: item,
      });
    }
    outputJson('li',finalJson)
  } catch (e) {
    console.error(`理想门店信息爬取失败！${e}`);
  }
}
getRes();

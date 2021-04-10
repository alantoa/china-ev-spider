const got = require("got");
const targetUrl = "https://www.xiaopeng.com/api/store/queryAll";
async function getRes() {
  try {
    const html = await got("https://www.xiaopeng.com/pengmetta.html");
    const cookies = html.headers["set-cookie"].map((str) => str.split(";")[0]);
    const csrfArr = html.body.match(/\"csrf\"\:\"(.*?)\"/);
    const cookie = cookies.join("; ");
    const { body } = await got.post(targetUrl, {
      json: {
        _csrf: csrfArr[1],
        lat: 31.20882,
        lng: 121.41989,
      },
      responseType: "json",
      headers: {
        "user-agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36`,
        cookie,
      },
    });
    const json = body.data;
    let finalJson = [];
    for (let item of json) {
      finalJson.push({
        store_id: item.storeCode,
        pic: item.coverUrlAccess,
        store_name: item.storeName,
        store_address: item.storeName,
        address: item.address,
        opened_at: "",
        store_status: item.reserveStatus,
        type: item.storeTypeArr.join(","),
        brand: "小鹏",
        original_data: item,
      });
    }
    outputJson("xpeng", finalJson);
  } catch (e) {
    console.error(`小鹏门店信息爬取失败！${e}`);
  }
}
getRes();

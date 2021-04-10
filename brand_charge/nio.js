const got = require("got");
const { outputJson } = require("../outputFs");

/*************** nio 解密代码 **********************/
var g = require("crypto-js"),
  I = function () {
    return 0;
  },
  m = [
    v,
    {
      host: "https://app-stg.nio.com",
      powerHost: "https://power-stg.nio.com",
      secret: "2ECceB77a007363739b1eaab4b89418c",
      dataSecret: "6VnxYc9a5yCA4tMm",
    },
    {
      host: "https://app-test.nio.com",
      powerHost: "https://power-test.nio.com",
      secret: "832311c0B552ff4c708892E3a254FCD0",
      dataSecret: "6VnxYc9a5yCA4tMm",
    },
    {
      host: "https://app-dev.nio.com",
      powerHost: "https://power-dev.nio.com",
      secret: "bFC8Ac96c2B0f233E7C0e0D51C389CA8",
      dataSecret: "6VnxYc9a5yCA4tMm",
    },
  ],
  v = {
    host: "https://app.nio.com",
    powerHost: "https://power.nio.com",
    secret: "05CB7e124A29ac6502DaFa21821Ca389",
    dataSecret: "Jv58PQrfcQN3iPU3",
  },
  x = function (e, t, n, r, a) {
    var o = r + e + "?";
    var i = t.sort();
    for (let c = 0; c < i.length; c++) {
      o += i[c] + "&";
    }
    return (o = o.substring(0, o.length - 1) + n), g.MD5(o).toString(g.enc.Hex);
  },

function decryptData(e) {
  try {
    if (e && "string" == typeof e) {
      var t = e.replace(/[\t\n\r]/gi, ""),
        n = I(),
        r = "";
      if (n > 0) {
        var a = m[n];
        r = g.enc.Utf8.parse(a.dataSecret);
      } else r = g.enc.Utf8.parse(v.dataSecret);
      var o = g.AES.decrypt(t, r, {
        mode: g.mode.ECB,
        padding: g.pad.Pkcs7,
      });
      return JSON.parse(o.toString(g.enc.Utf8));
    }
  } catch (e) {
    console.error(e);
  }
  return e;
}
/*************** nio 代码 ****************/
async function getRes() {
  try{
    let json = [];
  let { body: citys } = await got(
    `https://app.nio.com/pe/app/charging/v1/wx/scan/support-cities?app_id=100342&app_ver=1.4.0&lang=zh-cn&region=cn&device_id=9589da093fa9d8ff6cde549143308e58&terminal=%7B%22name%22:%22iPhone%22,%22model%22:%22iPhone%22%7D&timestamp=1614768870&sign=030ac7fb7c09220766755f9d60a53040`
  );
  for (let city of JSON.parse(citys).data) {
    const P = Math.round(new Date().getTime() / 1e3);
    const t = [
      "app_id=100342",
      "app_ver=1.4.0",
      "lang=zh-cn",
      "region=cn",
      "latitude=31.210628509521484",
      "longitude=121.42591094970703",
      `region_code=${city.region_code}`,
      "with_distance=true",
      "with_fee=true",
      "with_merge=false",
      "filter=operator=NIO;",
      "sort_rule=DISTANCE",
      `timestamp=${P}`,
    ];
    let sign = x(
      "/pe/app/map/v1/power/around",
      t,
      "05CB7e124A29ac6502DaFa21821Ca389",
      "GET",
      undefined
    );
    let url = `https://app.nio.com/pe/app/map/v1/power/around?${t.join(
      "&"
    )}&sign=${sign}`;
    let { body } = await got(url, {
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    json.push(JSON.parse(body).data);
  }
  let nioDataJson = [];
  for (let item of json) {
    let _item = decryptData(item);
    nioDataJson.push(..._item.powers);
  }
  for (let item of nioDataJson) {
    let locations = item.location.split(',')
    finalJson.push({
      location_id: item.id,
      lat: locations[1],
      lng: locations[0],
      brand: "蔚来",
      title: item.name,
      total: item.charger_total_number,
      address: item.address,
      city: "",
      open_soon: "",
      is_opening: item.is_opening,
      is_parking_free: item.is_parking_free,
      type: item.type,
      original_fee: item.original_fee,
      original_data: item,
    });
  }
  outputJson("nio", nioDataJson);
  }catch(e){
    console.error(`蔚来充电桩信息爬取失败！${e}`);
  }
}
getRes();

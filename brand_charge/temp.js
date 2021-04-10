const { outputJson } = require("../outputFs");
const { BrandCharge } = require("../../models");
const logger = require("../../common").getLogger(__filename);
const json = require("./nio.json");

let finalJson =[]
for (let item of json) {
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
BrandCharge.bulkCreate(finalJson);


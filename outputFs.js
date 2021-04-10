const fs = require("fs");
const path = require("path");

function outputJson(name, result) {
  let data = JSON.stringify(result);
  let dest_file = path.join("./", `${name}.json`);
  fs.writeFile(dest_file, data, (err) => {
    if (err) {
      console.error("error：", err);
      throw err;
    }
    console.log("exported json  -->  ", path.basename(dest_file));
  });
}

module.exports = {
  outputJson,
};

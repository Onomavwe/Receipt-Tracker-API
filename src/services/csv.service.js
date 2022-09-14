const fastcsv = require("fast-csv");
const fs = require("fs");

const generateCSV = async (jsonData, outputFile) => {
  const ws = fs.createWriteStream(outputFile);

  fastcsv
    .write(jsonData, { headers: true })
    .on("finish", function () {
      console.log("Write to CSV successfully!");
    })
    .pipe(ws);
};

module.exports = {
  generateCSV,
};

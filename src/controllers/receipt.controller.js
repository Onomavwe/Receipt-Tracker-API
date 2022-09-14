const receiptServices = require("../services/receipt.service");
const csvServices = require("../services/csv.service");

const createReceipt = async (req, res) => {
  try {
    const receipt = await receiptServices.createReceipt(req.body);
    res.json(receipt);
  } catch (err) {
    console.error(err.message);
  }
};

const getReceipts = async (req, res) => {
  const receipts = await receiptServices.getReceipts();
  return res.status(200).json(receipts);
};

const getCategorySum = async (req, res) => {
  const receipts = await receiptServices.getCategorySum();

  const data = receipts.map((receipt) => receipt.dataValues);
  const outputFile = "category-sum.csv";
  csvServices.generateCSV(data, outputFile);

  return res.status(200).json(receipts);
};

module.exports = {
  getReceipts,
  getCategorySum,
  createReceipt,
};

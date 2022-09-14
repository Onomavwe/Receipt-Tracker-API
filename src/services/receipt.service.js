const { Receipt } = require("../models");
const { sequelize } = require("../models");

const createReceipt = async (receipt) => {
  return Receipt.create(receipt);
};

const getReceipts = async () => {
  const receipts = await Receipt.findAll();
  return receipts;
};

const getCategorySum = async () => {
  const receipts = await Receipt.findAll({
    group: ["category"],
    attributes: ["category", [sequelize.fn("sum", sequelize.col("cost")), "total"]],
  });
  return receipts;
};

module.exports = {
  getReceipts,
  getCategorySum,
  createReceipt,
};

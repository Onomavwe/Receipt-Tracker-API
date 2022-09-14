const router = require("express-promise-router")();
const receiptController = require("../controllers/receipt.controller");

router.get("/receipts", receiptController.getReceipts);
router.post("/receipts", receiptController.createReceipt);
router.get("/category-sum", receiptController.getCategorySum);

module.exports = router;

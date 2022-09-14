const express = require('express');
const cors = require('cors');

const app = express();

const receiptRoute = require("./routes/receipt.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use("/api/", receiptRoute);

module.exports = app;

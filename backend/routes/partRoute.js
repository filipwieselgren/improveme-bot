const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const PartModel = require("../models/Parts.js");

router.get("/section", async (req, res) => {
  const getSections = await PartModel.find();

  res.status(200).send(getSections);
});

module.exports = router;

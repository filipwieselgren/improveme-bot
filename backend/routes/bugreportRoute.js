const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

const BugReportModel = require("../models/BugReport.js");
const PartModel = require("../models/Parts.js");

router.post("/bugreport", async (req, res) => {
  const bugFromBody = await req.body;
  const createBugReport = new BugReportModel(bugFromBody);

  await createBugReport.save();

  const parts = await PartModel.findOne({ section: req.body.part });

  parts.bugs.push(createBugReport);

  await parts.save();

  res.status(201).send({ parts, createBugReport });
});

module.exports = router;

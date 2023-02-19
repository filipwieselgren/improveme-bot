const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json({ limit: "16mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

app.use(cors());

const BugReportModel = require("../models/BugReport.js");

router.post("/bugreport", async (req, res) => {
  const bugFromBody = req.body;
  const createBugReport = new BugReportModel(bugFromBody);
  await createBugReport.save();
  res.status(201).send(createBugReport);
});

module.exports = router;

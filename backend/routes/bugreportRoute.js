const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const BugReportModel = require("../models/BugReport.js");

router.post("/bugreport", async (req, res) => {
  const bugFromBody = await req.body;
  const createBugReport = new BugReportModel(bugFromBody);

  await createBugReport.save();
  res.status(201).send(createBugReport);
});

module.exports = router;

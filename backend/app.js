const express = require("express");
const app = express();
mongoose = require("mongoose");
const cors = require("cors");

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from the server" });
// });

app.use(cors());

app.use(express.json());

const PartModel = require("./models/Parts.js");
const FeatureRequestModel = require("./models/FeatureRequest.js");
const BugReportModel = require("./models/BugReport.js");
const GeneralImprovmentModel = require("./models/GeneralImprovment");

app.post("/api/v1/featurerequest", async (req, res) => {
  const featureFromBody = await req.body;
  const createFeatuRerequest = new FeatureRequestModel(featureFromBody);

  await createFeatuRerequest.save();
  res.status(201).send(createFeatuRerequest);
  // const parts = await PartModel.findOne({ part: req.body.part });
  // const newFeatureRequest = await FeatureRequestModel.findOne({
  //   description: req.body.description,
  // });

  // let checkDuplicate = parts.featureRequest.filter((fr) => {
  //   return fr.description === newFeatureRequest.description;
  // });

  // if (checkDuplicate.length === 0) {
  //   parts.featureRequest.push(newFeatureRequest);
  //   await parts.save();
  //   res.status(200).send(parts);
  // } else {
  //   console.log("Already exists");
  //   res.status(409).send("Already exists");
  // }
});
app.post("/api/v1/bugreport", async (req, res) => {
  const bugFromBody = await req.body;
  const createBugReport = new BugReportModel(bugFromBody);

  await createBugReport.save();
  res.status(201).send(createBugReport);
});

app.post("api/v1/generalimprovment", async (req, res) => {
  const generalImprovmentBody = await req.body;
  const createGeneralImprovment = new GeneralImprovmentModel(
    generalImprovmentBody
  );

  await createGeneralImprovment.save();
  res.status(201).send(createGeneralImprovment);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

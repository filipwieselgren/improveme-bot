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

app.post("/api/v1/featurerequest", async (req, res) => {
  const featureRequest = await req.body;
  const fr = new FeatureRequestModel(featureRequest);

  await fr.save();

  const parts = await PartModel.findOne({ part: req.body.part });
  const newFr = await FeatureRequestModel.findOne({
    description: req.body.description,
  });

  let checkDuplicate = parts.featureRequest.filter((fr) => {
    return fr.description === newFr.description;
  });

  if (checkDuplicate.length === 0) {
    parts.featureRequest.push(newFr);
    await parts.save();
    res.status(200).send(parts);
  } else {
    console.log("Already exists");
    res.status(409).send("Already exists");
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

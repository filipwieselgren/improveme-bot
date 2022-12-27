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

app.post("/api/v1/featurerequest", async (req, res) => {
  const featureRequest = await req.body;

  console.log("featureRequest:", featureRequest);

  const parts = await PartModel.findOne({ part: req.body.part });
  parts.featureRequest.push(featureRequest);
  await parts.save();
  res.status(200).send(parts);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

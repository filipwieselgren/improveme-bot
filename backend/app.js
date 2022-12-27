const express = require("express");
const app = express();
mongoose = require("mongoose");

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from the server" });
// });

app.use(express.json());

const FeatureRequestModel = require("./models/FeatureRequest.js");
const PartsModel = require("./models/Parts.js");

let partsTest = [
  {
    id: "1",
    part: "Part1",
    featureRequest: [],
    bugs: [],
    genralImprovments: [],
  },
  {
    id: "2",
    part: "Part2",
    featureRequest: [],
    bugs: [],
    genralImprovments: [],
  },
];

app.post("/api/v1/featurerequest", async (req, res) => {
  const featureRequest = {
    description: "Test2",
    solvesWhat: "Test2",
    part: "Part2",
    email: "filip@gmail.com",
  };

  const createFr = new FeatureRequestModel(featureRequest);
  createFr.save(createFr);
  res.json(createFr);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

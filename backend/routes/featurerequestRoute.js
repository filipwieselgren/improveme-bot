const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const FeatureRequestModel = require("../models/FeatureRequest.js");
const PartModel = require("../models/Parts.js");

router.post("/featurerequest", async (req, res) => {
  const featureFromBody = await req.body;

  const createFeatuRerequest = new FeatureRequestModel(featureFromBody);
  await createFeatuRerequest.save();

  const parts = await PartModel.findOne({ section: req.body.part });

  parts.featureRequest.push(createFeatuRerequest);

  await parts.save();
  res.status(201).send({ parts, createFeatuRerequest });
});

module.exports = router;

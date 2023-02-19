const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const FeatureRequestModel = require("../models/FeatureRequest.js");

router.post("/featurerequest", async (req, res) => {
  const featureFromBody = await req.body;
  const createFeatuRerequest = new FeatureRequestModel(featureFromBody);
  await createFeatuRerequest.save();
  res.status(201).send(createFeatuRerequest);
});

module.exports = router;

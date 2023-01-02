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

module.exports = router;

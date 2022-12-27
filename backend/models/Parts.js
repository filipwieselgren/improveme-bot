const mongoose = require("mongoose");
const { FeatureRequestModel } = require("./FeatureRequest.js");

const partSchema = new mongoose.Schema({
  part: { type: String, required: true },
  featureRequest: { type: Array, required: true },
  bugs: { type: Array, required: true },
  genralImprovments: { type: Array, required: true },
});

const partModel = mongoose.model("parts", partSchema);

module.exports = partModel;

const mongoose = require("mongoose");

const featurerequestSchema = new mongoose.Schema({
  description: { type: String, required: true },
  solvesWhat: { type: String, required: true },
  part: { type: String, required: true },
  email: { type: String, required: false },
});

const FeatureRequestModel = mongoose.model(
  "feature-requests",
  featurerequestSchema
);

module.exports = FeatureRequestModel;
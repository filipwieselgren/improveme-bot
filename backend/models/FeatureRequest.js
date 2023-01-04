const mongoose = require("mongoose");

const featurerequestSchema = new mongoose.Schema({
  description: { type: String, required: true },
  solvesWhat: { type: String, required: true },
  part: { type: String, required: true },
  email: { type: String, required: false },
  approved: { type: Boolean, required: true },
  status: { type: String, required: true },
  assignedTo: { type: String, required: true },
});

const FeatureRequestModel = mongoose.model(
  "feature-requests",
  featurerequestSchema
);

module.exports = FeatureRequestModel;

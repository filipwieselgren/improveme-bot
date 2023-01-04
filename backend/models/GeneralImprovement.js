const mongoose = require("mongoose");

const generalImprovmentSchema = new mongoose.Schema({
  description: { type: String, required: true },
  reason: { type: String, required: true },
  part: { type: String, required: true },
  email: { type: String, required: false },
  approved: Boolean,
  status: String,
  assignedTo: String,
});

const GeneralImprovmentModel = mongoose.model(
  "general improvements",
  generalImprovmentSchema
);

module.exports = GeneralImprovmentModel;

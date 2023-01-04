const mongoose = require("mongoose");

const generalImprovmentSchema = new mongoose.Schema({
  description: { type: String, required: true },
  reason: { type: String, required: true },
  part: { type: String, required: true },
  email: { type: String, required: false },
  approved: { type: Boolean, required: true },
  status: { type: String, required: true },
  assignedTo: { type: String, required: true },
});

const GeneralImprovmentModel = mongoose.model(
  "general improvements",
  generalImprovmentSchema
);

module.exports = GeneralImprovmentModel;

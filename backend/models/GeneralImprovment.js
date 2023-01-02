const mongoose = require("mongoose");

const generalImprovmentSchema = new mongoose.Schema({
  description: { type: String, required: true },
  background: { type: String, required: true },
  part: { type: String, required: true },
  reproduce: { type: String, required: true },
  files: Array,
  email: { type: String, required: false },
});

const GeneralImprovmentModel = mongoose.model(
  "general improvements",
  generalImprovmentSchema
);

module.exports = GeneralImprovmentModel;

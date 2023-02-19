const mongoose = require("mongoose");

const partSchema = new mongoose.Schema({
  section: { type: String, required: true },
});

const partModel = mongoose.model("sections", partSchema);

module.exports = partModel;

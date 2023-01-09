const mongoose = require("mongoose");

const partSchema = new mongoose.Schema({
  section: { type: String, required: true },
  featureRequest: { type: Array, required: true },
  bugs: { type: Array, required: true },
  genralImprovments: { type: Array, required: true },
});
// const partSchema = new mongoose.Schema({
//   part: { type: String, required: true },
// });

const partModel = mongoose.model("sections", partSchema);

module.exports = partModel;

const mongoose = require("mongoose");

const bugreportSchema = new mongoose.Schema({
  description: { type: String, required: true },
  background: { type: String, required: true },
  part: { type: String, required: true },
  reproduce: { type: String, required: true },
  files: Array,
  email: { type: String, required: false },
  status: String,
  assignedTo: String,
});

const BugReportModel = mongoose.model("bug-reports", bugreportSchema);

module.exports = BugReportModel;

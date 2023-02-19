const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const GeneralImprovementModel = require("../models/GeneralImprovement.js");

router.post("/generalimprovement", async (req, res) => {
  const generalImprovementBody = await req.body;
  const createGeneralImprovment = new GeneralImprovementModel(
    generalImprovementBody
  );
  await createGeneralImprovment.save();
  res.status(201).send(createGeneralImprovment);
});

module.exports = router;

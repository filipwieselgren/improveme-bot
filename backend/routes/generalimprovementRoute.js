const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const GeneralImprovementModel = require("../models/GeneralImprovement.js");
const PartModel = require("../models/Parts.js");

router.post("/generalimprovement", async (req, res) => {
  const generalImprovementBody = await req.body;
  const createGeneralImprovment = new GeneralImprovementModel(
    generalImprovementBody
  );

  await createGeneralImprovment.save();

  const parts = await PartModel.findOne({ section: req.body.part });

  parts.genralImprovments.push(createGeneralImprovment);

  await parts.save();

  res.status(201).send({ parts, createGeneralImprovment });
});

module.exports = router;

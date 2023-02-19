const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const app = express();
mongoose.set("strictQuery", false);

const DBKEY = process.env.MONGODBKEY;
const port = 8080;

const startServer = async () => {
  try {
    await mongoose.connect(DBKEY);
    console.log("DB connected");

    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (error) {
    console.log("ERROR MESSAGE:", error.message);
  }
};

startServer();

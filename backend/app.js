const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "16mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from the server" });
// });

app.use(cors());

app.use(express.json());

const partRoute = require("./routes/partRoute.js");
const featurerequestRoute = require("./routes/featurerequestRoute.js");
const bugreportRoute = require("./routes/bugreportRoute.js");
const generalimprovementRoute = require("./routes/generalimprovementRoute.js");

app.use("/api/v1", featurerequestRoute);
app.use("/api/v1", bugreportRoute);
app.use("/api/v1", generalimprovementRoute);
app.use("/api/v1", partRoute);

const port = 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

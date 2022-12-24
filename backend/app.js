const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from the server" });
// });

app.use(express.json());

app.post("/api/v1/featurerequest", (req, res) => {
  console.log(req.body);
  res.send("Done ");
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

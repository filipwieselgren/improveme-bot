const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server" });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

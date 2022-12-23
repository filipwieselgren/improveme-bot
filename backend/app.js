const express = require("express");
const app = express();

app.get("/", (res, req) => {
  res.status(200).send("Hello from the server");
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

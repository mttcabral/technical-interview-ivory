const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello! Cloud Run and CI/CD test");
});

app.listen(port, () => {
  console.log(`App listening in ${port}`);
});

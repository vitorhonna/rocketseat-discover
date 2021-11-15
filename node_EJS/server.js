const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("💻 Server is running on PORT 8080 📡");

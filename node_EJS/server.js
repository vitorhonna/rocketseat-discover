const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "E",
      message: "mbedded",
    },
    {
      title: "J",
      message: "ava",
    },
    {
      title: "S",
      message: "cript",
    },
  ];
  const subtitle =
    "EJS é uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";
  res.render("pages/index", {
    items: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

const port = 8080;
app.listen(port);
console.log(`💻 Server is running on PORT ${port} 📡`);

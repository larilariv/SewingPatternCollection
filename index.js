const express = require("express");
const app = express();
const patternsController = require("./controllers/patternsController");

const methodOverride = require("method-override");

app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.redirect("/patterns");
});

app.use("/patterns", patternsController);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Express MVC app is running on port ${port}`);
});

const express = require("express");
const router = express.Router();

const Pattern = require("../models/pattern-model");

router.get("/", (req, res) => {
  Pattern.find({})
    .then((patterns) => {
      res.render("patterns/index", { patterns });
    })
    .catch(console.error);
});

router.get("/:id", (req, res) => {
  Pattern.find({})
    .then((pattern) => {
      res.render("patterns/show", pattern[req.params.id]);
    })
    .catch(console.error);
});

module.exports = router;
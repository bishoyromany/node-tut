const express = require("express");
require("dotenv/config");
const constants = require("./../../constants");

const router = express.Router();

const members = require("./../../data/memers");

router.get("/", (req, res) => {
  res.render("members/index", {
    title: "Members",
    members,
  });
});

router.get("/add", (req, res) => {
  res.render("members/add", {
    title: "Add New Member",
    API_VERSION: constants.API_VERSION,
    members,
  });
});

module.exports = router;

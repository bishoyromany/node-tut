const express = require("express");

const router = express.Router();

router.post("/create", (req, res) => {
  res.json(req.body);
});

module.exports = router;

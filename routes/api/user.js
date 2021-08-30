const express = require("express");
require("dotenv/config");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  if (req.body.username) {
    jwt.sign(
      req.body,
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ user: req.body, token });
      }
    );
  } else {
    res.statusCode(401);
    res.json({ msg: "Failed To Login" });
  }
});

module.exports = router;

require("dotenv/config");
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET || "secret", (err, decoded) => {
      if (err || !decoded) res.sendStatus(401);

      decoded.token = token;

      req.body.user = decoded;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = auth;

const {
  AuthenticationError,
  ForbiddenError,
} = require("apollo-server-express");

module.exports = {
  forbidden: (user) => {
    if (!user || !user._id) {
      throw new ForbiddenError("You Are Not Allowed To Reach This Page");
    }
  },
  auth: (user) => {
    if (!user) {
      throw new AuthenticationError("Wrong Passowrd Or Email.");
    }
  },
  error: (message) => {
    throw new Error(message);
  },
};

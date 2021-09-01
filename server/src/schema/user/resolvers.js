const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { forbidden, auth, error } = require("./../errors");
require("dotenv").config();

module.exports = {
  Query: {
    hello: () => "Hello world!",
    user: async (parent, params, context) => {
      forbidden(context.user);
      return await context.models.User.findById(context.user._id);
    },
    users: async (parent, args, context) => {
      forbidden(context.user);
      return await context.models.User.find()
        .skip(args.offset || 0)
        .limit(args.limit || process.env.DEFAULT_PAGINATION_LIMIT);
    },
  },
  Mutation: {
    signUp: async (parent, { username, email, password, name }, { models }) => {
      // normalize email address
      email = email.trim().toLowerCase();
      // hash the password
      const hashed = await bcrypt.hash(password, 10);
      try {
        const user = await models.User.create({
          username,
          email,
          name,
          password: hashed,
        });
        // create and return the json web token
        user.token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return user;
      } catch (err) {
        error("Error creating account");
      }
    },
    signIn: async (parent, { username, email, password }, { models }) => {
      if (email) {
        email = email.trim().toLowerCase();
      }
      const user = await models.User.findOne({
        $or: [{ email }, { username }],
      });
      // if there is no user, throw an authentication error
      auth(user);
      // if the passwords don't match, throw an authentication error
      const valid = await bcrypt.compare(password, user.password);
      auth(valid);
      delete user.password;
      // create and return the json web token
      user.token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      return user;
    },
  },
};

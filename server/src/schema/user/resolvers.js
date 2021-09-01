module.exports = {
  hello: () => "Hello world!",
  user: (parent, params) => {
    return {
      _id: params._id,
    };
  },
  users: async (parent, params, context) => {
    return await context.models.User.find()
      .skip(params.offset || 0)
      .limit(params.limit || process.env.DEFAULT_PAGINATION_LIMIT);
  },
};

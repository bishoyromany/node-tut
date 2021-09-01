module.exports = {
  hello: () => "Hello world!",
  user: (parent, params) => {
    return {
      _id: params._id,
    };
    console.log(parent, params);
  },
};

const { users } = require("../data");
const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },

  Mutation: {
    createUser(parents, args) {
      console.log("args", args);
      const newUser = args;
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = {
  resolvers,
};

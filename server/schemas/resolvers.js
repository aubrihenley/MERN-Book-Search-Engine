const { AuthenticationError } = require("apollo-server-express");
const { Book, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("savedBooks");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("savedBooks");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutations: {},
};

module.exports = resolvers;

const { User } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
          return await userData.find({}).populate('user').populate({
            path: 'user',
            populate: 'user'
          });
        },
        books: async () => {
          return await Books.find({}).populate('book');
        },
      }
}
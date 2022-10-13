const { User, Cat, Dog } = require('../models');

const resolvers = {
    Query: {
        cats: async () => {
            return await Cat.find()
        }
    },
    Query: {
      dogs: async () => {
        return await Dog.find()
      }
    }
};

module.exports = resolvers;
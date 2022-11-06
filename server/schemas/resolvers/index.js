const catsResolvers = require('./Cats');
const dogsResolvers = require('./Dogs');
const usersResolvers = require('./Users');

module.exports={
    Query:{
        ...catsResolvers.Query,
        ...dogsResolvers.Query,
        ...usersResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation,
        ...catsResolvers.Mutation,
        ...dogsResolvers.Mutation
    }
}
const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

//combine above imported resolvers
module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};

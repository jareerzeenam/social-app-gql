const postsResolvers = require('./posts');
const usersResolvers = require('./users');

//combine above imported resolvers
module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
};

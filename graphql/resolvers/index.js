const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

//combine above imported resolvers
module.exports = {
  Post: {
    //Normal function
    likeCount(parent) {
      console.log(parent);
      return parent.likes.length;
    },
    //Arrow function
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};

const Post = require('../../models/Post');

module.exports = {
  Query: {
    //   Get All posts from DB
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch {
        throw new Error(err);
      }
    },
  },
};

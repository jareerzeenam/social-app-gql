const Post = require('../../models/Post');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    //   Get All posts from DB (index)
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch {
        throw new Error(err);
      }
    },

    //Get single post (show)
    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        throw new Error('err Post not found');
      }
    },
  },

  Mutation: {
    async createPost(_, { body }, context) {
      const user = checkAuth(context);
      console.log(user);

      const newPost = new Post({
        body,
        user: user.indexOf,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const post = await newPost.save();

      return post;
    },
  },
};

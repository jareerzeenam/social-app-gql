const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

//Import Post Model
const Post = require('./models/Post');
// connect to db
const { MONGODB } = require('./config');

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

//Resolvers
const resolvers = {
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

//Setup Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//connect to db
mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo DB Successfully');
    return server.listen({ port: 4000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });

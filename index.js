const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
// connect to db
const mongoose = require('mongoose');
const { MONGODB } = require('./config');

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hello World',
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

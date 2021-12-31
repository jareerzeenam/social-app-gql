const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const consola = require('consola');

//TypeDefs
const typeDefs = require('./graphql/typeDefs');
//Resolvers
const resolvers = require('./graphql/resolvers');
// MongoDB Connection
const { MONGODB } = require('./config');

//Setup Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//connect to db and start server
mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    consola.success('Connected to Mongo DB Successfully!');
    return server.listen({ port: 4000 });
  })
  .then((res) => {
    consola.success(`Server running at ${res.url}`);
  });

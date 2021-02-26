const { ApolloServer, PubSub } = require('apollo-server');

const typeDefs = require('./resolvers/typeDef');
const resolvers = require('./resolvers/resolver');

const pubsub = new PubSub();

const PORT = process.env.port || 4000;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    // Don't give the specific errors to the client.
    if (err.message.startsWith("errors is not defined")) {
      return new Error('Something is wrong with the username or credential');
    }
    // Otherwise return the original error.  The error can also
    // be manipulated in other ways, so long as it's returned.
    return err;
  },
  context: ({ req }) => ({ req, pubsub }),
});

server.listen(PORT,'0.0.0.0').then(({url})=>{
    console.log(`Server running at ${url}`);
});
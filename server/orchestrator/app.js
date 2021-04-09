const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({ 
  modules: [
    require('./module/movies'),
    require('./module/category')
  ]
 });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
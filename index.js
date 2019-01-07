const { makeExecutableSchema } = require('graphql-tools');
const { graphql } = require ( 'graphql' );


const typeDefs = `
  schema {
    query: Query
  }
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'World'
  }
};

const schema = makeExecutableSchema( { typeDefs, resolvers } );

const query = process.argv[2];

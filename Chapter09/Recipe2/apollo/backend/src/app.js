// Dependencies
import express from 'express';
import expressGraphQL from 'express-graphql';
import cors from 'cors';
import graphQLExpress from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

// Query
import { typeDefs } from './types/Query';
import { resolvers } from './types/Resolvers';

// Defining our schema with our typeDefs and resolvers
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Intializing our express app
const app = express();

// Using cors
app.use(cors());

// GraphQL Middleware
app.use('/', graphQLExpress({
  schema,
  pretty: true,
  graphiql: true
}));

// Listening port 5000
app.listen(5000);

console.log('Server started on port 5000');

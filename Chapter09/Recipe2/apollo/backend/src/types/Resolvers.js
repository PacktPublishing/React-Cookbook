// Dependencies
import { GraphQLScalarType } from 'graphql';

// TweetModel (Mongo Schema)
import TweetModel from '../model/Tweet';

// Resolvers
export const resolvers = {
  Query: {
    // Receives an _id and returns a single Tweet.
    getTweet: _id => TweetModel.getTweet(_id),
    // Gets an array of Tweets.
    getTweets: () => TweetModel.getTweets()
  },
  Mutation: {
    // Creating a Twwet passing the args (Tweet object), the _ is the root normally is undefined
    createTweet: (_, args) => TweetModel.createTweet(args),
    // Deleting a Tweet passing in the args the _id of the Tweet we want to remove
    deleteTweet: (_, args) => TweetModel.deleteTweet(args),
    // Updating a Tweet passing the new values of the Tweet we want to update
    updateTweet: (_, args) => TweetModel.updateTweet(args)
  },
  // This DateTime will return the current date.
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Date custom scalar type',
    parseValue: () => new Date(),
    serialize: value => value,
    parseLiteral: ast => ast.value
  })
};

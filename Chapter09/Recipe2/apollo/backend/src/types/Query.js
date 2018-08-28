export const typeDefs = [`
  # Scalar Types (custom type)
  scalar DateTime

  # Tweet Type (should match our Mongo schema)
  type Tweet {
    _id: String
    tweet: String
    author: String
    createdAt: DateTime
  }

  # Query
  type Query {
    # This query will return a single Tweet
    getTweet(_id: String): Tweet

    # This query will return an array of Tweets
    getTweets: [Tweet]
  }

  # Mutations
  type Mutation {
    # DateTime is a custom Type
    createTweet(
      tweet: String,
      author: String,
      createdAt: DateTime
    ): Tweet

    # Mutation to delete a Tweet
    deleteTweet(_id: String): Tweet

    # Mutation to update a Tweet (! means mandatory).
    updateTweet(
      _id: String!,
      tweet: String!
    ): Tweet
  }

  # Schema
  schema {
    query: Query
    mutation: Mutation
  }
`];

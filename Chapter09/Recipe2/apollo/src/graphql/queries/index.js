// Dependencies
import gql from 'graphql-tag';

// getTweets query
export const QUERY_GET_TWEETS = gql`
  query getTweets {
    getTweets {
      _id
      tweet
      author
      createdAt
    }
  }
`;

// Dependencies
import React, { Component } from 'react';

// Components
import Tweet from './Tweet';
import CreateTweet from './CreateTweet';
import Query from '../shared/components/Query';

// Queries
import { QUERY_GET_TWEETS } from '../graphql/queries';

// Styles
import './Tweets.css';

class Tweets extends Component {
  render() {
    return (
      <div className="tweets">
        {/* Rendering CreateTweet component */}
        <CreateTweet />

        {/* Executing QUERY_GET_TWEETS query and render our Tweet component */}
        <Query query={QUERY_GET_TWEETS} render={Tweet} />
      </div>
    );
  }
}

export default Tweets;

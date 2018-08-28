// Dependencies
import React, { Component } from 'react';
import { Query as ApolloQuery } from 'react-apollo';

class Query extends Component {
  render() {
    const {
      query,
      render: Component
    } = this.props;

    return (
      <ApolloQuery query={query}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return <p>Query Error: {error}</p>
          }

          return <Component data={data || false} />;
        }}
      </ApolloQuery>
    );
  }
}

export default Query;

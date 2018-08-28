// Dependencies
import React, { Component } from 'react';
import { Mutation as ApolloMutation } from 'react-apollo';

class Mutation extends Component {
  render() {
    const {
      mutation,
      query,
      children,
      onCompleted
    } = this.props;

    return (
      <ApolloMutation
        mutation={mutation}
        update={(cache, { data }) => {
          // Getting the mutation and query name
          const { definitions: [{ name: { value: mutationName } }] } = mutation;
          const { definitions: [{ name: { value: queryName } }] } = query;

          // Getting cachedData from previous query
          const cachedData = cache.readQuery({ query });

          // Getting current data (result of the mutation)
          const current = data[mutationName];

          // Initializing our updatedData
          let updatedData = [];

          // Lower Case mutation name
          const mutationNameLC = mutationName.toLowerCase();

          // If the mutation includes "delete" or "remove" actions
          if (mutationNameLC.includes('delete') || mutationNameLC.includes('remove')) {
            // Removing the current tweet by filtering from the cachedData
            updatedData = cachedData[queryName].filter(row => row._id !== current._id);
          } else if (mutationNameLC.includes('create') || mutationNameLC.includes('add')) {
            // Create or add action injects the current value in the array
            updatedData = [current, ...cachedData[queryName]];
          } else if (mutationNameLC.includes('edit') || mutationNameLC.includes('update')) {
            // Edit or update actions will replace the old values with the new ones
            const index = cachedData[queryName].findIndex(row => row._id === current._id);
            cachedData[queryName][index] = current;
            updatedData = cachedData[queryName];
          }

          // Updating our data to refresh the tweets list
          cache.writeQuery({
            query,
            data: {
              [queryName]: updatedData
            }
          });
        }}
        onCompleted={onCompleted} // This method is executed once the mutation is completed
      >
        {/* Here we render the content of the component (children) */}
        {children}
      </ApolloMutation>
    );
  }
}

export default Mutation;

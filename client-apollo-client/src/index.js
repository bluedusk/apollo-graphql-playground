import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { createUploadLink } from 'apollo-upload-client';
// import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: "http://localhost:4001"
});
// const link = createUploadLink({ uri: 'http://localhost:4001' });

// const client = new ApolloClient({
//   uri: 'http://localhost:4001',
//   cache: new InMemoryCache(),
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();

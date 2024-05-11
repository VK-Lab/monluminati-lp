import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";

// const client = new ApolloClient({
//   uri: 'http://localhost:3555/graphql',
//   cache: new InMemoryCache()
// });

// export { client }

let apolloClient: any;

const getApolloClient = () => {
  if (apolloClient == null) {
    apolloClient = new ApolloClient({
      uri: "http://localhost:3555/api/graphql",
      cache: new InMemoryCache()
    });
  }
  return apolloClient as ApolloClient<NormalizedCacheObject>;
};

export default getApolloClient;

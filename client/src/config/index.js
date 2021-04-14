import { ApolloClient, InMemoryCache } from '@apollo/client';
import { favoriteVars } from './vars'

export const cache = new InMemoryCache({
  typePolicies:{
    Query: {
      fields: {
        favorites: {
          read() {
            return favoriteVars()
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export default client
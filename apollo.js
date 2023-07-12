import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const GRAPHQL_ENDPOINT = `https://zeeds-api.hasura.app/v1/graphql`;
const HASURA_SECRET = `AyEWnVrMNnTjT3WR0a1OwaCZZaip8rD6yQ5fyE19sap6ny9T69zEQ6NYoLhGmb8j`
const Token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1MWJiNGJkMWQwYzYxNDc2ZWIxYjcwYzNhNDdjMzE2ZDVmODkzMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vemVlZHMtYXBwLTljMmZjIiwiYXVkIjoiemVlZHMtYXBwLTljMmZjIiwiYXV0aF90aW1lIjoxNjg5MTkxNDMwLCJ1c2VyX2lkIjoiemh2TnRJMGRMQ085Z29DZDB1bDZTbDBId1RuMSIsInN1YiI6Inpodk50STBkTENPOWdvQ2QwdWw2U2wwSHdUbjEiLCJpYXQiOjE2ODkxOTE0NzcsImV4cCI6MTY4OTE5NTA3NywiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oJshpL5l2oxAlb3OmJLwR2uOc7Z-2tKfUsb6hAZKk53xVWxf0g10BI0GoPP62xttfF-JSALip-vY7TnJjNgL7BPyt690flUgxitrcEL-VHvyKgbnz3HOHNTGk5FtpgraNYNsdx4lbx5l47tXOJDcqWF0Y-JPZbsmu85dBmheoC7JcafzBrE8wZBRUY_E_xHeLYFCjD29bFeUJoooxaqVv8TSeJI_8LcRjurAJA-d_xcPoV9R2GaoBuomqJVslvVkhbZqsikSF3XTJMn7o4Fm-MKxQOfXVFlUQ-5cHC7H0APJDOHYk4kcJ2e3n9URtSzZF7RAvOOCtHL9LfIvXCer4g'
const createApolloClient = () => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      'Authorization': `Bearer ${Token}`,
      'x-hasura-admin-secret': HASURA_SECRET
    }
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}
export default createApolloClient;

// // Initialize Apollo Client
// const client = new ApolloClient({
//   uri: GRAPHQL_ENDPOINT,
//   cache: new InMemoryCache()
// });

// export default client;
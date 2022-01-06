import { request, gql } from 'graphql-request';

require('dotenv').config();
const graphqlAPI = process.env.REACT_APP_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query getPosts {
    blogsConnection {
      edges {
        node {
          content {
            raw
          }
          date
          title
          postId
        }
      }
    }
  }
  `
  const result = await request(graphqlAPI, query)
  return result.blogsConnection.edges;
}
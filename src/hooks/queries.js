import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.REACT_APP_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query getPosts {
    blogsConnection(orderBy: createdAt_DESC) {
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

export const getProjects = async () => {
  const query = gql`
  query getProjects {
    cards {
      date
      description
      link
      title
      tech
      shortname
    }
  }
  `
  const result = await request(graphqlAPI, query)
  return result.cards
}
import { gql } from 'apollo-boost';

export const GET_SEARCH_QUERY = gql`
  query getSearchProducts($title: String!) {
    searchProducts(title: $title) {
      id
      title
      image
      description
      detail {
        price
      }
    }
  }
`;

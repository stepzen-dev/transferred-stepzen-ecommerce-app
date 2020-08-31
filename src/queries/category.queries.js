import { gql } from 'apollo-boost';

export const GET_CATEGORIES_QUERY = gql`
  query getCategories {
    listCategories(label: "Main Navigation") {
      children {
        id
        label
        children {
          id
          label
        }
      }
    }
  }
`;

export const GET_CATEGORY_BY_ID_QUERY = gql`
  query getCategoryById($id: ID!) {
    category(id: $id) {
      children {
        id
        label
      }
      products {
        id
        title
        image
        description
        detail {
          price
          inventory
        }
      }
    }
  }
`;

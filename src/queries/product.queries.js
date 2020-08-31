import { gql } from 'apollo-boost';

export const GET_PRODUCT_BY_ID_QUERY = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
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

export const GET_PRODUCT_REVIEWS_BY_ID_QUERY = gql`
  query getProductReviewsById($id: ID!) {
    findReviews(productId: $id) {
      id
      comment
      rating
    }
  }
`;

export const GET_PRODUCTS_BEST_SELLERS_QUERY = gql`
  query getProductsBestSellers {
    listTags(label: "best-seller") {
      product {
        id
        title
        image
        description
        detail {
          price
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_HOLIDAY_QUERY = gql`
  query getProductsByHoliday {
    listTags(label: "holiday") {
      product {
        id
        title
        image
        description
        detail {
          price
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_LOCATION_QUERY = gql`
  query getProductsByLocation {
    listTags(label: "US") {
      product {
        id
        title
        image
        description
        detail {
          price
        }
      }
    }
  }
`;

export const GET_PRODUCTS_FEATURED_QUERY = gql`
  query getProductsFeatured {
    listTags(label: "featured") {
      product {
        id
        title
        image
        description
        detail {
          price
        }
      }
    }
  }
`;

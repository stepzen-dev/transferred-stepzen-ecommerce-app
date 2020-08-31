import { gql } from 'apollo-boost';

export const GET_LOCATION_QUERY = gql`
  query getLocation($ip: String!) {
    location(ip: $ip) {
      city
      country
      currency
      latitude
      longitude
    }
  }
`;

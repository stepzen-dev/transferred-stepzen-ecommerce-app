import { gql } from 'apollo-boost';

export const GET_HOLIDAY_QUERY = gql`
  query getHoliday($country: String!, $month: Float!) {
    holidays(country: $country, month: $month) {
      name
    }
  }
`;

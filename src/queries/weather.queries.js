import { gql } from 'apollo-boost';

export const GET_WEATHER_QUERY = gql`
  query getWeather($latitude: Float!, $longitude: Float!, $date: Date!) {
    weather(latitude: $latitude, longitude: $longitude, date: $date) {
      description
    }
  }
`;

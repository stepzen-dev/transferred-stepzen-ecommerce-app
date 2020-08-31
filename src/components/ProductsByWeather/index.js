import React from 'react';

import { useAsync } from 'react-async';
import { useQuery } from '@apollo/react-hooks';

import { GET_LOCATION_QUERY } from '../../queries/location.queries';
import { GET_WEATHER_QUERY } from '../../queries/weather.queries';

import { getIP } from '../../util/getIP';

const ProductsByWeather = () => {
  const { data: ip } = useAsync({ promiseFn: getIP });

  const { data: locationData } = useQuery(GET_LOCATION_QUERY, {
    skip: !ip,
    variables: { ip },
  });

  const { data: weatherData, error, loading } = useQuery(GET_WEATHER_QUERY, {
    skip: !locationData?.location,
    variables: {
      latitude: locationData?.location.latitude,
      longitude: locationData?.location.longitude,
      date: new Date().toISOString().split('T')[0],
    },
  });

  if (error) {
    return <p>Error</p>;
  }

  if (loading || !weatherData) {
    return <p>Loading</p>;
  }

  return (
    <div className="card">
      <div className="card-content">
        <p>
          Weather for {locationData?.location.city} -{' '}
          {weatherData?.weather.description}
        </p>
      </div>
    </div>
  );
};

export default ProductsByWeather;

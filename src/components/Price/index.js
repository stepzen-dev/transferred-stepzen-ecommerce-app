import React from 'react';

import { useAsync } from 'react-async';
import { useQuery } from '@apollo/react-hooks';

import { GET_LOCATION_QUERY } from '../../queries/location.queries';

import { getIP } from '../../util/getIP';

const Price = ({ price }) => {
  const { data: ip } = useAsync({ promiseFn: getIP });

  const { data: locationData } = useQuery(GET_LOCATION_QUERY, {
    skip: !ip,
    variables: { ip },
  });

  let currency = '';

  switch (locationData?.location?.currency) {
    case 'GBP':
      currency = '£';
      break;
    case 'USD':
      currency = '$';
      break;
    default:
      currency = '';
  }

  return (
    <>
      {currency}
      {price.toFixed(2)}
    </>
  );
};

export default Price;

import React from 'react';

import { Link } from 'react-router-dom';
import { useAsync } from 'react-async';
import { useQuery } from '@apollo/react-hooks';

import Price from '../Price';

import { GET_LOCATION_QUERY } from '../../queries/location.queries';
import { GET_PRODUCTS_BY_LOCATION_QUERY } from '../../queries/product.queries';

import { getIP } from '../../util/getIP';

const ProductsByLocation = () => {
  const { data: ip } = useAsync({ promiseFn: getIP });

  const { data: locationData } = useQuery(GET_LOCATION_QUERY, {
    skip: !ip,
    variables: { ip },
  });

  const { data: productData, error, loading } = useQuery(
    GET_PRODUCTS_BY_LOCATION_QUERY
  );

  if (error) {
    return <p>Error</p>;
  }

  if (loading || !locationData || !productData) {
    return <p>Loading</p>;
  }

  const products = productData.listTags.slice(0, 3).map((record) => ({
    ...record.product,
  }));

  return (
    <>
      <h2 className="is-size-2">Popular in {locationData.location.city}</h2>
      <div className="columns">
        {products.map((product) => (
          <div className="column is-4" key={`location_product_${product.id}`}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5">
                      <Link
                        className="homepage-product-title"
                        to={`/product/${product.id}`}
                      >
                        {product.title}
                      </Link>
                    </p>
                    <p className="subtitle is-6">
                      <Price price={product.detail.price} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsByLocation;

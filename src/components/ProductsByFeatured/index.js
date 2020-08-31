import React from 'react';

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import Price from '../Price';

import { GET_PRODUCTS_FEATURED_QUERY } from '../../queries/product.queries';

const ProductsByFeatured = () => {
  const { data, error, loading } = useQuery(GET_PRODUCTS_FEATURED_QUERY);

  if (error) {
    return <p>Error</p>;
  }

  if (loading || !data) {
    return <p>Loading</p>;
  }

  const products = data.listTags.slice(0, 3).map((record) => ({
    ...record.product,
  }));

  return (
    <>
      <h2 className="is-size-2">Featured</h2>
      <div className="columns">
        {products.map((product) => (
          <div className="column is-4" key={`featured_product_${product.id}`}>
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

export default ProductsByFeatured;

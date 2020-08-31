import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import AddToBasketButton from '../AddToBasketButton';
import Price from '../Price';

import { GET_PRODUCT_BY_ID_QUERY } from '../../queries/product.queries';

const ProductDetails = () => {
  const { productId } = useParams();

  const { data, error, loading } = useQuery(GET_PRODUCT_BY_ID_QUERY, {
    variables: { id: productId },
  });

  if (error) {
    return <p>Error...</p>;
  }

  if (loading) {
    return <p>Loading....</p>;
  }

  const product = data.product;

  return (
    <div className="columns">
      <div className="column is-3">
        <figure className="image is-4by3">
          <img src={product.image} alt={product.title} />
        </figure>
      </div>
      <div className="column is-9">
        <div className="content">
          <h1>{product.title}</h1>
          <h2>
            <Price price={product.detail.price} />
          </h2>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <AddToBasketButton
          price={product.details?.price}
          productId={productId}
        />
      </div>
    </div>
  );
};

export default ProductDetails;

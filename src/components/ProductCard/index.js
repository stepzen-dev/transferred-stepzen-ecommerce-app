import React from 'react';

import { Link } from 'react-router-dom';

import Price from '../Price';

import './ProductCard.scss';

const ProductCard = ({ product }) => (
  <div className="card product-card">
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
          <p className="title is-4">
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </p>
          <p className="subtitle is-6">
            <Price price={product.detail?.price} />
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;

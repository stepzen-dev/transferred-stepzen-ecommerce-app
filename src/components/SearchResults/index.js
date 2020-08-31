import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { useLocation } from 'react-router-dom';

import Price from '../Price';

import { GET_SEARCH_QUERY } from '../../queries/search.queries';

const SearchResults = () => {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get('q');

  const { data, error, loading } = useQuery(GET_SEARCH_QUERY, {
    variables: { title },
  });

  if (error) {
    return <p>Error</p>;
  }

  if (loading || !data) {
    return <p>Loading</p>;
  }

  const results = data.searchProducts;

  if (results.length === 0) {
    return <p>No results</p>;
  }

  return (
    <>
      {results.map((product) => (
        <article className="media">
          <figure className="media-left">
            <p className="image is-128x128">
              <img src={product.image} alt="" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <h2>
                <a href={`/product/${product.id}`}>{product.title}</a>
              </h2>
              <p>
                <strong>
                  <Price price={product.detail?.price} />
                </strong>
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default SearchResults;

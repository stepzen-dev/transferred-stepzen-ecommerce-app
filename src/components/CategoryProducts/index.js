import React from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import ProductCard from '../ProductCard';

import { GET_CATEGORY_BY_ID_QUERY } from '../../queries/category.queries';

const CategoryProducts = () => {
  const { categoryId } = useParams();

  const { data, error, loading } = useQuery(GET_CATEGORY_BY_ID_QUERY, {
    variables: { id: categoryId },
  });

  if (error) {
    return <p>Error...</p>;
  }

  if (loading) {
    return <p>Loading....</p>;
  }

  const children = data.category.children;
  const products = data.category.products;

  if (children.length) {
    return (
      <ul className="columns is-multiline content">
        {children.map((child) => (
          <li className="column is-12" key={`category_child_card_${child.id}`}>
            <h2>
              <Link to={`/category/${child.id}`}>{child.label}</Link>
            </h2>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="columns is-multiline">
      {products.map((product) => (
        <li className="column is-4" key={`product_card_${product.id}`}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryProducts;

import React from 'react';

import Layout from '../../containers/Layout';
import ProductDetails from '../../components/ProductDetails';
import ProductReviews from '../../components/ProductReviews';

const Product = () => (
  <Layout>
    <div className="section">
      <ProductDetails />
      <hr />
      <ProductReviews />
    </div>
  </Layout>
);

export default Product;

import React from 'react';

import CategoryMenu from '../../components/CategoryMenu';
import Layout from '../../containers/Layout';
import CategoryProducts from '../../components/CategoryProducts';

const Category = () => (
  <Layout>
    <div className="section">
      <div className="columns">
        <div className="column is-2">
          <CategoryMenu />
        </div>
        <div className="column">
          <CategoryProducts />
        </div>
      </div>
    </div>
  </Layout>
);

export default Category;

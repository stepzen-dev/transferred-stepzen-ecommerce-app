import React from 'react';

import Layout from '../../containers/Layout';
import ProductsByBestSeller from '../../components/ProductsByBestSeller';
import ProductsByFeatured from '../../components/ProductsByFeatured';
import ProductsByLocation from '../../components/ProductsByLocation';
import ProductsByWeather from '../../components/ProductsByWeather';

// import ProductsForThanksgiving from '../../components/ProductsForThanksgiving';

import './Home.scss';

const Home = () => (
  <Layout>
    <div className="section">
      <div className="columns is-variable is-4">
        <div className="column is-6">
          <ProductsByLocation />
        </div>
        <div className="column is-6">
          <ProductsByWeather />
        </div>
      </div>
      <div className="columns is-variable is-4">
        <div className="column is-6">
          <ProductsByFeatured />
        </div>
        <div className="column is-6">
          <ProductsByBestSeller />
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;

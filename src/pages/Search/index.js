import React from 'react';

import Layout from '../../containers/Layout';
import SearchResults from '../../components/SearchResults';

const Search = () => (
  <Layout>
    <div className="section">
      <div className="columns">
        <div className="column">
          <SearchResults />
        </div>
      </div>
    </div>
  </Layout>
);

export default Search;

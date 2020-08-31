import React, { useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

const NavbarSearch = () => {
  const history = useHistory();
  const location = useLocation();

  const startQuery = new URLSearchParams(location.search).get('q');

  const [query, setQuery] = useState(startQuery);

  const handleOnChange = (evt) => {
    const { value } = evt.target;
    setQuery(value);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (query) {
      history.push(`/search?q=${query}`);
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input is-small"
            defaultValue={query}
            onChange={handleOnChange}
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="control">
          <button className="button is-info is-small" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default NavbarSearch;

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import NavbarSearch from '../NavbarSearch';

import { GET_CATEGORIES_QUERY } from '../../queries/category.queries';

import logo from './logo.png';
import './Navbar.scss';

const Navbar = () => {
  const { categoryId } = useParams();
  const [mobileMenuVisible, toggleMobileMenuVisibility] = useState(false);

  const handleToggleMenu = (evt) => {
    evt.preventDefault();
    toggleMobileMenuVisibility(!mobileMenuVisible);
  };

  const { data } = useQuery(GET_CATEGORIES_QUERY);

  const categories = data?.listCategories[0]?.children || [];

  return (
    <header className="page-header">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="" />
            </Link>
            <a
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarMenu"
              className={`navbar-burger burger ${
                mobileMenuVisible ? 'is-active' : ''
              }`}
              href="#open-menu"
              onClick={handleToggleMenu}
              role="button"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            className={`navbar-menu ${mobileMenuVisible ? 'is-active' : ''}`}
            id="navbarMenu"
          >
            <div className="navbar-start">
              {categories.map((category) => (
                <Link
                  className={`navbar-item ${
                    categoryId === category.id ? 'is-active' : ''
                  }`}
                  key={`navbar_category_${category.id}`}
                  to={`/category/${category.id}`}
                >
                  {category.label}
                </Link>
              ))}
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <NavbarSearch />
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item">Basket (0)</div>
              <hr className="navbar-divider" />
              <div className="navbar-item">
                <div className="buttons">
                  <button
                    className="button is-small"
                    onClick={() =>
                      toast.error('This feature does not currently work.')
                    }
                    type="button"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

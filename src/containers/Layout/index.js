import React from 'react';

import { ToastContainer } from 'react-toastify';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Layout = ({ children }) => (
  <div className="page-container">
    <ToastContainer />
    <Navbar />
    <main className="page-main">
      <div className="container is-fluid">{children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;

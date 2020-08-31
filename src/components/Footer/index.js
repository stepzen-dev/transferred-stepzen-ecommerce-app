import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container is-fluid">
      <div className="content has-text-centered">
        <p>
          StepZen eCommerce Demo App. Powered by{' '}
          <a
            href="https://stepzen.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            StepZen
          </a>
          .
        </p>
        <p>
          <small>Copyright (c) 2020 StepZen Inc. All Rights Reserved.</small>
          <br />
          <small>
            All product names, logos, and brands are property of their
            respective owners.
          </small>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

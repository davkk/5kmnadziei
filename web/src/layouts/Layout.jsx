import React from 'react';
import PropTypes from 'prop-types';

import { Global } from '@emotion/core';
import styles from '../global.css.js';

import { Head, Header, Footer } from '@components';

const Layout = ({ children, pageTitle, siteDescription }) => (
  <>
    <Global styles={styles} />
    <Head pageTitle={pageTitle} customSiteDescription={siteDescription} />

    <Header pageTitle={pageTitle} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.defaultProps = {
  pageTitle: null,
  siteDescription: null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

export default Layout;

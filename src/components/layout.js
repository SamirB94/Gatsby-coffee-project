import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import './bootstrap.min.css';
import './layout.css';

import Navbar from './Globals/Navbar';
import Footer from './Globals/Footer';

const Layout = ({ children }) => (
	<Fragment>
		<Navbar />
		{children}
		<Footer />
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Timothy Porter | Web guy"
      meta={[
        { name: 'description', content: 'Timothy Porter | Building things for the internet' },
        { name: 'keywords', content: 'web, developer, react, gatsby' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960
      }}
    >
      {children()}
      <footer>
        Made with &hearts; using ReactJS, GatsbyJS, and Feather Icons.
      </footer>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

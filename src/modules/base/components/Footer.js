import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Footer = ({ children }) => <Component>{children}</Component>;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

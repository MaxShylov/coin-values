import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = ({ children }) => <Component>{children}</Component>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

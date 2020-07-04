import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.div`
  padding: 30px 40px;
`;

export const Container = ({ children }) => <Component>{children}</Component>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

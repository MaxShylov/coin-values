import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from 'styles';

const Component = styled.h1`
  color: ${styles.colors.blue};
`;

export const Title = ({ children }) => <Component>{children}</Component>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from 'styles';

const Component = styled.button`
  background: ${props =>
    props.active ? styles.colors.lightBlue : 'transparent'};
  border: 1px solid ${styles.colors.blue};
  color: ${styles.colors.blue};
  padding: 6px 12px;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;

  :hover {
    background: ${styles.colors.blue};
    color: ${styles.colors.white};
  }

  :focus {
    outline: none;
  }
`;

export const Button = ({ onClick = () => null, active, children }) => (
  <Component onClick={onClick} active={active}>
    {children}
  </Component>
);

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  active: false,
  children: null,
  onClick: () => null,
};

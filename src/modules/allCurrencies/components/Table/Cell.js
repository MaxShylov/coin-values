import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Th = styled.th`
  border-bottom: 1px solid #000;
  text-align: left;
  padding: 5px 10px;
  width: ${props => (props.type === 'name' ? '28%' : '18%')};
`;

const Td = styled.td`
  border-bottom: 1px solid #000;
  cursor: pointer;
  padding: 5px 10px;
`;

export const Cell = ({ children, header, type }) => {
  if (header) return <Th type={type}>{children}</Th>;
  return <Td>{children}</Td>;
};

Cell.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool,
  type: PropTypes.string,
};

Cell.defaultProps = {
  children: null,
  header: false,
  type: null,
};

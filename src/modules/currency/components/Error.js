import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getError } from 'modules/currency';

const Component = styled.div`
  color: red;
`;

export const Error = () => {
  const error = useSelector(getError);
  return <Component>{error}</Component>;
};

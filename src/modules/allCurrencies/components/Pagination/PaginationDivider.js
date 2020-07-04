import React from 'react';
import styled from 'styled-components';

import styles from 'styles';

const Divider = styled.div`
  color: ${styles.colors.blue};
  display: flex;
  justify-content: center;
  cursor: default;
  user-select: none;
  width: 30px;
`;

export const PaginationDivider = () => <Divider>...</Divider>;

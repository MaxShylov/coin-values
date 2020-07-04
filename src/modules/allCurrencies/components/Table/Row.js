import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { fixPercent, fixPrice } from 'helpers';
import { Cell } from 'modules/allCurrencies/components';
import styles from 'styles';

const Tr = styled.tr`
  :hover {
    background: ${styles.colors.lightBlue};
  }
`;

export const Row = ({ symbol, name, quote }) => {
  const history = useHistory();

  const handleClick = () => history.push(`/currency/${symbol}`);

  return (
    <Tr onClick={handleClick}>
      <Cell>{name}</Cell>
      <Cell>{fixPrice(quote.USD.market_cap)}</Cell>
      <Cell>{fixPrice(quote.USD.price)}</Cell>
      <Cell>{fixPrice(quote.USD.volume_24h)}</Cell>
      <Cell>{fixPercent(quote.USD.percent_change_24h)}</Cell>
    </Tr>
  );
};

Row.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.shape({
    USD: PropTypes.shape({
      market_cap: PropTypes.number,
      price: PropTypes.number,
      volume_24h: PropTypes.number,
      percent_change_24h: PropTypes.number,
    }),
  }),
};

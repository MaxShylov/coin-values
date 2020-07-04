import React from 'react';
import { useParams } from 'react-router-dom';

import {
  ButtonGoBack,
  CurrencyInfo,
  Error, Graph,
  Loading,
} from 'modules/currency/components';
import { Container, Footer, Header, Title } from 'modules/base/components';

export const PageCurrency = () => {
  const { symbol } = useParams();

  return (
    <Container>
      <Header>
        <Title>Криптовалюта: {symbol}</Title>
        <Loading />
      </Header>

      <CurrencyInfo symbol={symbol} />
      <Graph symbol={symbol} />

      <Footer>
        <ButtonGoBack />
        <Error />
      </Footer>
    </Container>
  );
};

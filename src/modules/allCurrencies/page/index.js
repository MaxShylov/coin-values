import React from 'react';

import {
  Error,
  Loading,
  Pagination,
  Table,
} from 'modules/allCurrencies/components';
import { Container, Footer, Header, Title } from 'modules/base/components';

export const PageAllCurrencies = () => {
  return (
    <Container>
      <Header>
        <Title>Криптовалюты</Title>
        <Loading />
      </Header>

      <Table />

      <Footer>
        <Error />
        <Pagination />
      </Footer>
    </Container>
  );
};

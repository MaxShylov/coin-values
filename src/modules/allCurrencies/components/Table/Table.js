import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  allCurrenciesActions,
  getAllCurrencies,
  getPage,
} from 'modules/allCurrencies';
import { Cell, Row } from 'modules/allCurrencies/components';

const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const Table = () => {
  const dispatch = useDispatch();
  const allCurrencies = useSelector(getAllCurrencies);
  const page = useSelector(getPage);

  const getData = () => {
    dispatch(
      allCurrenciesActions.getCurrenciesLimitAsync({
        start: (page - 1) * 20 || 1,
        limit: 20,
      }),
    );
  };

  useEffect(() => {
    const int = setInterval(getData, 30000);
    getData();
    return () => clearInterval(int);
  }, [dispatch, page]);

  return (
    <StyledTable>
      <thead>
        <tr>
          <Cell header type="name">
            Название валюты
          </Cell>
          <Cell header type="capitalization">
            Капитализация
          </Cell>
          <Cell header type="price">
            Цена за единицу
          </Cell>
          <Cell header type="volume">
            Объем рынка
          </Cell>
          <Cell header type="change">
            Изменение за 24 часа
          </Cell>
        </tr>
      </thead>
      <tbody>
        {allCurrencies.map(item => (
          <Row key={item.id} {...item} />
        ))}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {};

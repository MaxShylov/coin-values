import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { currencyActions, getInfo } from 'modules/currency';
import { fixDate, fixPercent, fixPrice } from 'helpers';

const Component = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTable = styled.table`
  width: calc(50% - 10px);
  border-spacing: 0;
  border-top: 1px solid;

  td {
    border-bottom: 1px solid;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CurrencyInfo = ({ symbol }) => {
  const dispatch = useDispatch();
  const info = useSelector(getInfo)[symbol];

  const getData = () => {
    dispatch(currencyActions.getCurrencyInfoAsync({ symbol }));
  };

  useEffect(() => {
    const int = setInterval(getData, 30000);
    getData();
    return () => clearInterval(int);
  }, [dispatch]);

  if (!info) return null;

  const quote = info.quote.USD;

  return (
    <Component>
      <StyledTable>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{info.id}</td>
          </tr>
          <tr>
            <td>Ранг:</td>
            <td>{info.cmc_rank}</td>
          </tr>
          <tr>
            <td>Имя:</td>
            <td>{info.name}</td>
          </tr>
          <tr>
            <td>Символ:</td>
            <td>{info.symbol}</td>
          </tr>
          <tr>
            <td>Слаг:</td>
            <td>{info.slug}</td>
          </tr>
          <tr>
            <td>Платформа:</td>
            <td>
              {info.platform && (
                <List>
                  <li>ID: {info.platform.id}</li>
                  <li>Имя: {info.platform.name}</li>
                  <li>Слаг: {info.platform.slug}</li>
                  <li>Симфол: {info.platform.symbol}</li>
                  <li>Токен: {info.platform.token_address}</li>
                </List>
              )}
            </td>
          </tr>
          <tr>
            <td>Теги:</td>
            <td>{info.tags.join(', ')}</td>
          </tr>
          <tr>
            <td>Активное:</td>
            <td>{info.is_active ? 'Да' : 'Нет'}</td>
          </tr>
          <tr>
            <td>Фиат:</td>
            <td>{info.is_fiat ? 'Да' : 'Нет'}</td>
          </tr>
          <tr>
            <td>Дата добавления:</td>
            <td>{fixDate(info.date_added)}</td>
          </tr>
          <tr>
            <td>Последнее обновление:</td>
            <td>{fixDate(info.last_updated)}</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledTable>
        <tbody>
          <tr>
            <td>Рыночная капитализация:</td>
            <td>{fixPrice(quote.market_cap)}</td>
          </tr>
          <tr>
            <td>Объем (за 24ч):</td>
            <td>{fixPrice(quote.volume_24h)}</td>
          </tr>
          <tr>
            <td>Циркулирующее предложение:</td>
            <td>{fixPrice(info.circulating_supply)}</td>
          </tr>
          <tr>
            <td>Максимальное предложение:</td>
            <td>{fixPrice(info.max_supply)}</td>
          </tr>
          <tr>
            <td>Общее предложение:</td>
            <td>{fixPrice(info.max_supply)}</td>
          </tr>
          <tr>
            <td>Общее предложение:</td>
            <td>{fixPrice(info.max_supply)}</td>
          </tr>
          <tr>
            <td>Число рыночных пар:</td>
            <td>{fixPrice(info.num_market_pairs)}</td>
          </tr>
          <tr>
            <td>Цена за единицу:</td>
            <td>{fixPrice(quote.price)}</td>
          </tr>
          <tr>
            <td>Изменение за 1 час:</td>
            <td>{fixPercent(quote.percent_change_1h)}</td>
          </tr>
          <tr>
            <td>Изменение за 24 часа:</td>
            <td>{fixPercent(quote.percent_change_24h)}</td>
          </tr>
          <tr>
            <td>Изменение за 7 дней</td>
            <td>{fixPercent(quote.percent_change_7d)}</td>
          </tr>
        </tbody>
      </StyledTable>
    </Component>
  );
};

// TODO: некорретный

CurrencyInfo.propTypes = {
  symbol: PropTypes.string.isRequired,
};

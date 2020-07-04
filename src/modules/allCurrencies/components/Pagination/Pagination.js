import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { allCurrenciesActions, getCount, getPage } from 'modules/allCurrencies';
import {
  PaginationDivider,
  PaginationItem,
} from 'modules/allCurrencies/components';

const ButtonsWrap = styled.div`
  display: flex;

  > * {
    margin-left: 10px;
  }
`;

export const Pagination = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  const page = useSelector(getPage);

  useEffect(() => {
    dispatch(
      allCurrenciesActions.getCurrenciesCountAsync({
        aux: 'is_active',
        sort: 'cmc_rank',
      }),
    );
  }, [dispatch]);

  if (count <= 20) return null;

  if (count <= 180) {
    return (
      <div>
        {Array(Math.ceil(count / 20))
          .fill(null)
          .map((_, index) => (
            <PaginationItem key={index} number={index + 1} />
          ))}
      </div>
    );
  }

  const first = 1;
  const last = Math.ceil(count / 20);
  const start = page < 5;
  const end = page > last - 4;
  const firstDivider = !start && <PaginationDivider />;
  const lastDivider = !end && <PaginationDivider />;
  const center = start ? 4 : end ? last - 3 : page;

  return (
    <ButtonsWrap>
      <PaginationItem number={first} />
      {firstDivider}
      <PaginationItem number={center - 2} />
      <PaginationItem number={center - 1} />
      <PaginationItem number={center} />
      <PaginationItem number={center + 1} />
      <PaginationItem number={center + 2} />
      {lastDivider}
      <PaginationItem number={last} />
    </ButtonsWrap>
  );
};

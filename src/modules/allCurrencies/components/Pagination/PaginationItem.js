import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { allCurrenciesActions, getPage } from 'modules/allCurrencies';
import { Button } from 'modules/base/components';

export const PaginationItem = ({ number }) => {
  const dispatch = useDispatch();
  const page = useSelector(getPage);

  const handleClick = () => dispatch(allCurrenciesActions.setPage(number));

  return (
    <Button onClick={handleClick} active={page === number}>
      {number}
    </Button>
  );
};

PaginationItem.propTypes = {
  number: PropTypes.number.isRequired,
};

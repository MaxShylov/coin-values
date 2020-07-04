import React from 'react';
import { useSelector } from 'react-redux';

import { getLoading } from 'modules/allCurrencies';
import iconLoading from 'assets/img/loading.svg';

export const Loading = () => {
  const loading = useSelector(getLoading);

  if (!loading) return null;

  return <img src={iconLoading} alt="" />;
};

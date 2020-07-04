import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'modules/base/components';

export const ButtonGoBack = () => {
  const history = useHistory();

  const handleClick = () => history.push('/');

  return <Button onClick={handleClick}>&#60; Назад</Button>;
};

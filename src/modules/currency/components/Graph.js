import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { DateTime } from 'luxon';

import { currencyActions, getGraphData, getGraphIds } from 'modules/currency';
import styles from 'styles';

const SEC_30 = 30000;

const Wrapper = styled.div`
  margin-top: 30px;
`;

export const Graph = ({ symbol }) => {
  const dispatch = useDispatch();
  const graphIds = useSelector(getGraphIds);
  const graphData = useSelector(getGraphData);

  const getData = () => {
    const { id } =
      graphIds.find(
        item => item.symbol.toLowerCase() === symbol.toLowerCase(),
      ) || {};

    if (!id) return;

    dispatch(currencyActions.getGraphInfoAsync(id));
  };

  useEffect(() => {
    dispatch(currencyActions.getGraphIdsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!graphIds.length) return;
    const int = setInterval(getData, SEC_30);
    getData();
    return () => {
      clearInterval(int);
      dispatch(currencyActions.setGraphData([]));
    }
  }, [dispatch, graphIds]);

  const labels = graphData.map(item =>
    DateTime.fromMillis(item[0]).toLocaleString(DateTime.DATETIME_SHORT),
  );
  const data = graphData.map(item => item[1]);

  return (
    <Wrapper>
      <h2>Изменения капитализации за неделю:</h2>

      <Line
        data={{
          labels,
          datasets: [
            {
              label: symbol,
              data,
              backgroundColor: ['transparent'],
              borderColor: [`${styles.colors.blue}`],
              borderWidth: 1,
            },
          ],
        }}
      />
    </Wrapper>
  );
};

Graph.propTypes = {
  symbol: PropTypes.string.isRequired,
};

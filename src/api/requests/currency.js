import superagent from 'superagent';

export const getGraphIds = () => {
  return superagent
    .get('https://api.coingecko.com/api/v3/coins/list')
    .set('Accept', 'application/json');
};

export const getGraphInfo = id => {
  return superagent
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`)
    .query({
      vs_currency: 'usd',
      days: 30,
    })
    .set('Accept', 'application/json');
};

export const getInfo = query => {
  return superagent
    .get('http://localhost:8080/currency')
    .query(query)
    .set('Accept', 'application/json');
};

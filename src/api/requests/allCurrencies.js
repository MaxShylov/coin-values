import superagent from 'superagent';

export const getMap = query => {
  return superagent
    .get('http://localhost:8080/map')
    .query(query)
    .set('Accept', 'application/json');
};

export const getLimit = query => {
  return superagent
    .get('http://localhost:8080/currencies')
    .query(query)
    .set('Accept', 'application/json');
};

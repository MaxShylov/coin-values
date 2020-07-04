require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const superagent = require('superagent');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const getData = (link, req, res) => {
  superagent
    .get('https://pro-api.coinmarketcap.com/v1/cryptocurrency' + link)
    .set('X-CMC_PRO_API_KEY', process.env.API_KEY)
    .set('accept', 'json')
    .query(req.query)
    .end((err, response) => {
      res.send(response.body);
    });
};

app.get('/map', (req, res) => getData('/map', req, res));
app.get('/currencies', (req, res) => getData('/listings/latest', req, res));
app.get('/currency', (req, res) => getData('/quotes/latest', req, res));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

const Router = require("express").Router();
const fetch = require("node-fetch");

Router.route("/").get(async (req, res, next) => {
  let { base, currency } = req.query;
  let endpoint;

  if (base !== undefined) base = base.toUpperCase();

  if (currency !== undefined) {
    currency = currency
      .split(",")
      .map((cur) => cur.toUpperCase())
      .toString();
  }
  try {
    if (currency == undefined && base == undefined) {
      endpoint = `https://api.exchangeratesapi.io/latest`;
    } else if (currency == undefined && base !== undefined) {
      endpoint = `https://api.exchangeratesapi.io/latest?base=${base}`;
    } else if (currency !== undefined && base == undefined) {
      endpoint = `https://api.exchangeratesapi.io/latest?symbols=${currency}`;
    } else {
      endpoint = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`;
    }
    const response = await (await fetch(endpoint)).json();

    res.json({
      results: {
        base: response.base,
        date: response.date,
        rates: response.rates,
        error: response.error,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
    throw error;
  }
});

module.exports = Router;

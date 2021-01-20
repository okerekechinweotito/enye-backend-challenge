# This is my solution to the Backend challenge by Enye

# 🌐 Make an API Request with - fetch('https://okereke-backend-challenge.herokuapp.com/api/rates?base=CZK&currency=EUR,GBP,USD');

## base = base currency

## Auto set to convert to EUR, GBP, USD

# Currency Rates API

You have been tasked with creating a service integration to a public API and exposing a RESTful endpoint. The endpoint will accept requests and returns a modified response schema from the integrated API.

Your application must integrate with the [Exchange Rate API](https://api.exchangeratesapi.io/latest) to proxy requests

- Your REST endpoint `/api/rates` **must** return a JSON object of the latest currency rates in the following format/schema:

```jsx
{
    "results": {
        "base": "",
        "date": "",
        "rates": {
        }
    }
}
```

### Required Technology

- [ExpressJS](https://expressjs.com/)

### Tasks

1. Create an endpoint that accepts a `GET` request to `/api/rates`
2. The `/api/rates` endpoint must accept the following request query parameter strings
   1. **base**: the home currency rates to be quoted against (i.e. `CZK`)
   2. **currency**: the specific exchange rates based on a comma-separated symbols parameter (i.e. `EUR,GBP,USD`).
3. You can assume standard HTTP status codes on the response. If a request is unsuccessful, your application must properly handle it accordingly with the appropriate status codes
4. Upon a successful API response, transform the fetched payload into an object containing the following keys:
   1. **results**: JSON object containing the results from the API
   2. **base**: the requested home rate from the request URL query strings
   3. **date**: the current date
   4. **rates**: An Object containing the requested currency in the request URL query strings
5. Your application server must be written with Node using an Express server ([https://expressjs.com/](https://expressjs.com/))
6. You **must** deploy your backend code

---

As an example, a request to fetch the currency exchange rates from `CZK` to `EUR, GBP, USD` might look like:

```jsx
/api/rates?base=CZK&currency=EUR,GBP,USD
```

A successful response for the above request should return the following schema (of course with a more up-to-date value)

```jsx
{
    "results": {
        "base": "CZK",
        "date": "2020-11-17",
        "rates": {
            "EUR": 0.0377244605,
            "GBP": 0.033795458,
            "USD": 0.044824204
        }
    }
}
```

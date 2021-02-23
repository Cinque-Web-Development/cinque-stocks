const axios = require("axios");
const key = process.env.REACT_APP_TWELVE_KEY;
const tickerKey = process.env.REACT_APP_STOCK_TICKER;
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"

export default function fetchStocks(searchTerm) {
    return axios.get(`${CORS}api.marketstack.com/v1/intraday/latest?symbols=${searchTerm}&access_key=${key}&limit=10`)
    .catch((err) => console.log(err))
}


const axios = require("axios");
const key = process.env.REACT_APP_TWELVE_KEY;
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"

export default function fetchTickers() {
    return axios.get(`${CORS}api.marketstack.com/v1/tickers?access_key=${key}`)
    .catch((err) => console.log(err))
}
const axios = require("axios");
const key = process.env.REACT_APP_TWELVE_KEY
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"

export default function fetchStocks() {
    return axios.get(`${CORS}api.twelvedata.com/time_series?symbol=BTC/USD,ETH/USD,AAPL,ZOM&interval=1min&is_batch=true&apikey=${key}`)
    .catch((err) => console.log(err))
}
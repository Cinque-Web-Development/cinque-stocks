const axios = require("axios");
const key = process.env.REACT_APP_TWELVE_KEY
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"

export default function fetchStocks() {
    return axios.get(`${CORS}api.marketstack.com/v1/eod/latest?symbols=AAPL,MSFT,FB,ZM,GOOG,TSLA,ZOM&access_key=${key}&limit=10`)
    .catch((err) => console.log(err))
}
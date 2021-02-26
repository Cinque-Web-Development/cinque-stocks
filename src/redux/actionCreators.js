import fetchStocks from "../services/stock-api";
import fetchTickers from "../services/tickers-api";

import {GET_STOCKS} from './actions';
import {GET_TICKERS} from './actions';

export function getStocks(stockSymbol) {
  return async (dispatch) => {
    const stockResults = await fetchStocks(stockSymbol);

    dispatch({ type: GET_STOCKS, payload: stockResults.data.data });
  };
}

export function getTickers() {
  return async (dispatch) => {
    const companyResults = await fetchTickers();
    dispatch({type: GET_TICKERS, payload: companyResults.data.data})
  }
}

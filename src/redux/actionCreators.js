import fetchStocks from "../services/stock-api";
import {GET_STOCKS} from './actions';

export default function getStocks(stockSymbol) {
  return async (dispatch) => {
    const stockResults = await fetchStocks(stockSymbol);

    dispatch({ type: GET_STOCKS, payload: stockResults.data.data });
  };
}

import { combineReducers } from "redux";
import { GET_STOCKS, GET_TICKERS } from "./actions";

export function stocksReducer(state = [], action) {
  switch (action.type) {
    case GET_STOCKS:
      return action.payload;
    default:
      return state;
  }
}

export function tickersReducer(state = [], action) {
  switch (action.type) {
    case GET_TICKERS:
      return action.payload;
    default:
      return state;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default combineReducers({
  stocks: stocksReducer,
  tickers: tickersReducer,
});

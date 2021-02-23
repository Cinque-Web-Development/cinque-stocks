import {GET_STOCKS} from './actions';
const initialState = {stock: []};

export default function stocksReducer(state = initialState, action) {
    switch(action.type) {
        case GET_STOCKS:
            return {stocks: action.payload};
        default:
            return state
    }
}

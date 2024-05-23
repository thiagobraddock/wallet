import { AnyAction } from 'redux';
import { SET_CURRENCIES, WALLET_INITIAL_STATE } from '../../typos';

function wallet(state = WALLET_INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
}

export default wallet;

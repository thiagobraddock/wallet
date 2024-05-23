import { AnyAction } from 'redux';
import { SET_EMAIL, USER_INITIAL_STATE } from '../../typos';

function user(state = USER_INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default user;

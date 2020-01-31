import {SIGN_IN, SIGN_OUT} from '../actions/types';
const INITAL_STATE = {
  isSignedIn: null
};

const AuthReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSingedIn: false };
    default:
      return state;
  }
};

export default AuthReducer;

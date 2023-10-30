import {
  AUTH_TOKEN_FETCH_FAILURE,
  AUTH_TOKEN_FETCH_RESET,
  AUTH_TOKEN_FETCH_SUCCESS,
} from "../interfaces/ActionInterfaces/AuthActions";
import IAuth from "../interfaces/IAuth";

const defaultState: IAuth = {
  token: null,
  tokenFetchSuccess: false,
  tokenFetchFailure: false,
  error: null,
};

const newReleasesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_TOKEN_FETCH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        tokenFetchSuccess: true,
        tokenFetchFailure: false,
      };
    case AUTH_TOKEN_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        tokenFetchSuccess: false,
        tokenFetchFailure: true,
      };
    case AUTH_TOKEN_FETCH_RESET:
      return {
        ...state,
        error: null,
        tokenFetchSuccess: false,
        tokenFetchFailure: false,
      };
    default:
      return state;
  }
};

export default newReleasesReducer;

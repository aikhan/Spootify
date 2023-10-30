import {
  AUTH_TOKEN_FETCH,
  AUTH_TOKEN_FETCH_FAILURE,
  AUTH_TOKEN_FETCH_SUCCESS,
  AUTH_TOKEN_FETCH_RESET,
  IAuthTokenFetchAction,
  IAuthTokenFetchSuccessAction,
  IAuthTokenFetchFailureAction,
  IAuthTokenFetchResetAction
} from "../interfaces/ActionInterfaces/AuthActions";

const authTokenFetch = (): IAuthTokenFetchAction => ({
  type: AUTH_TOKEN_FETCH,
});

const authTokenFetchSuccess = (token): IAuthTokenFetchSuccessAction => ({
  type: AUTH_TOKEN_FETCH_SUCCESS,
  payload: {
    token,
  },
});

const authTokenFetchFailure = (error): IAuthTokenFetchFailureAction => ({
  type: AUTH_TOKEN_FETCH_FAILURE,
  payload: {
    error,
  },
});

const authTokenFetchReset = (): IAuthTokenFetchResetAction => ({
    type: AUTH_TOKEN_FETCH_RESET,
  });
  

export { authTokenFetch, authTokenFetchSuccess, authTokenFetchFailure,authTokenFetchReset };

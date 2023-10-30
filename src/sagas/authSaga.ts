import { call, put, takeLatest } from "redux-saga/effects";
import { authTokenFetchApi } from "../api";
import { authTokenFetchFailure, authTokenFetchSuccess } from "../actions";
import { AUTH_TOKEN_FETCH } from "../interfaces/ActionInterfaces/AuthActions";

export function* handleAuthTokenFetch() {
  try {
    const result = yield call(authTokenFetchApi);
    yield put(authTokenFetchSuccess(result.access_token));
  } catch (error) {
    yield put(authTokenFetchFailure(error));
  }
}

export default function* authWatcherSaga() {
  yield takeLatest(AUTH_TOKEN_FETCH, handleAuthTokenFetch);
}

import { call, put, select, takeLatest } from "redux-saga/effects";
import { NEW_RELEASES_FETCH } from "../interfaces/ActionInterfaces/NewReleasesFetchActions";
import { newReleasesFetchApi } from "../api";
import { newReleasesFetchFailure, newReleasesFetchSuccess } from "../actions";
import IAlbum from "../interfaces/IAlbum";

export const getAuth = (state) => state.auth;

export function* handleNewReleasesFetch() {
  try {

    const auth = yield select(getAuth);

    const newReleases: IAlbum[] = yield call(newReleasesFetchApi, auth.token);

    yield put(newReleasesFetchSuccess(newReleases));
  } catch (error) {
    yield put(newReleasesFetchFailure(error));
  }
}

export default function* newReleasesWatcherSaga() {
  yield takeLatest(NEW_RELEASES_FETCH, handleNewReleasesFetch);
}

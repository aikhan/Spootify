import { call, put, select, takeLatest } from "redux-saga/effects";
import { CATEGORIES_FETCH } from "../interfaces/ActionInterfaces/CateogriesActions";
import ICategory from "../interfaces/ICategory";
import { categoriesFetchFailure, categoriesFetchSuccess } from "../actions";
import { categoriesFetchApi } from "../api";

export const getAuth = (state) => state.auth;

export function* handleCategoriesFetch() {
  try {
    console.log("handleCategoriesFetch");

    const auth = yield select(getAuth);

    const categories: ICategory[] = yield call(categoriesFetchApi, auth.token);

    yield put(categoriesFetchSuccess(categories));
  } catch (error) {
    yield put(categoriesFetchFailure(error));
  }
}

export default function* categoriesWatcherSaga() {
  yield takeLatest(CATEGORIES_FETCH, handleCategoriesFetch);
}

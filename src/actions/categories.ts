import {
  CATEGORIES_FETCH,
  CATEGORIES_FETCH_FAILURE,
  CATEGORIES_FETCH_SUCCESS,
  ICategoriesFetchAction,
  ICategoriesFetchFailureAction,
  ICategoriesFetchSuccessAction,
} from "../interfaces/ActionInterfaces/CateogriesActions";

const categoriesFetch = (): ICategoriesFetchAction => ({
  type: CATEGORIES_FETCH,
});

const categoriesFetchSuccess = (categories): ICategoriesFetchSuccessAction => ({
  type: CATEGORIES_FETCH_SUCCESS,
  payload: {
    categories: categories,
  },
});

const categoriesFetchFailure = (error): ICategoriesFetchFailureAction => ({
  type: CATEGORIES_FETCH_FAILURE,
  payload: {
    error: error,
  },
});

export { categoriesFetch, categoriesFetchSuccess, categoriesFetchFailure };

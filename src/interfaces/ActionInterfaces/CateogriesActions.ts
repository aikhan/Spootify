import ICategory from "../ICategory";
import BaseAction from "./BaseAction";

export const CATEGORIES_FETCH = "CATEGORIES_FETCH";
export const CATEGORIES_FETCH_SUCCESS = "CATEGORIES_FETCH_SUCCESS";
export const CATEGORIES_FETCH_FAILURE = "CATEGORIES_FETCH_FAILURE";

export interface ICategoriesFetchAction extends BaseAction {
  type: typeof CATEGORIES_FETCH;
}

export interface ICategoriesFetchSuccessAction extends BaseAction {
  type: typeof CATEGORIES_FETCH_SUCCESS;
  payload: { categories: ICategory[] };
}

export interface ICategoriesFetchFailureAction extends BaseAction {
  type: typeof CATEGORIES_FETCH_FAILURE;
  payload: { error: Error };
}

export type PlaylistsAction =
  | ICategoriesFetchAction
  | ICategoriesFetchSuccessAction
  | ICategoriesFetchFailureAction;

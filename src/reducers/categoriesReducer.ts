import {
  CATEGORIES_FETCH,
  CATEGORIES_FETCH_FAILURE,
  CATEGORIES_FETCH_SUCCESS,
} from "../interfaces/ActionInterfaces/CateogriesActions";
import ICategories from "../interfaces/ICategories";

const defaultState: ICategories = {
  categories: [],
  error: null,
};

const categoriesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS: {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }

    case CATEGORIES_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default categoriesReducer;

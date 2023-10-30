import {
  INewReleasesFetchAction,
  INewReleasesFetchSuccessAction,
  INewReleasesFetchFailureAction,
  NEW_RELEASES_FETCH,
  NEW_RELEASES_FETCH_SUCCESS,
  NEW_RELEASES_FETCH_FAILURE,
} from "../interfaces/ActionInterfaces/NewReleasesFetchActions";

const newReleasesFetch = (): INewReleasesFetchAction => ({
  type: NEW_RELEASES_FETCH,
});

const newReleasesFetchSuccess = (
  newReleases
): INewReleasesFetchSuccessAction => ({
  type: NEW_RELEASES_FETCH_SUCCESS,
  payload: {
    newReleases: newReleases,
  },
});

const newReleasesFetchFailure = (error): INewReleasesFetchFailureAction => ({
  type: NEW_RELEASES_FETCH_FAILURE,
  payload: {
    error,
  },
});

export { newReleasesFetch, newReleasesFetchSuccess, newReleasesFetchFailure };

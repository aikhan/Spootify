import IAlbum from '../IAlbum'
import BaseAction from './BaseAction'

export const NEW_RELEASES_FETCH = 'NEW_RELEASES_FETCH'
export const NEW_RELEASES_FETCH_SUCCESS = 'NEW_RELEASES_FETCH_SUCCESS'
export const NEW_RELEASES_FETCH_FAILURE = 'NEW_RELEASES_FETCH_FAILURE'

export interface INewReleasesFetchAction extends BaseAction {
    type: typeof NEW_RELEASES_FETCH
}

export interface INewReleasesFetchSuccessAction extends BaseAction {
    type: typeof NEW_RELEASES_FETCH_SUCCESS
    payload: { newReleases: IAlbum[] }
}

export interface INewReleasesFetchFailureAction extends BaseAction {
    type: typeof NEW_RELEASES_FETCH_FAILURE
    payload: { error: Error }
}

export type NewReleasesFetchActions =
    | INewReleasesFetchAction
    | INewReleasesFetchSuccessAction
    | INewReleasesFetchFailureAction

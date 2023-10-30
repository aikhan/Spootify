import BaseAction from './BaseAction'

export const AUTH_TOKEN_FETCH = 'AUTH_TOKEN_FETCH'
export const AUTH_TOKEN_FETCH_SUCCESS = 'AUTH_TOKEN_FETCH_SUCCESS'
export const AUTH_TOKEN_FETCH_FAILURE = 'AUTH_TOKEN_FETCH_FAILURE'
export const AUTH_TOKEN_FETCH_RESET = 'AUTH_TOKEN_FETCH_RESET'

export interface IAuthTokenFetchAction extends BaseAction {
    type: typeof AUTH_TOKEN_FETCH
}

export interface IAuthTokenFetchSuccessAction extends BaseAction {
    type: typeof AUTH_TOKEN_FETCH_SUCCESS
    payload: { token: string }
}

export interface IAuthTokenFetchFailureAction extends BaseAction {
    type: typeof AUTH_TOKEN_FETCH_FAILURE
    payload: { error: Error }
}

export interface IAuthTokenFetchResetAction extends BaseAction {
    type: typeof AUTH_TOKEN_FETCH_RESET
}

export type NewReleasesFetchActions =
    | IAuthTokenFetchSuccessAction
    | IAuthTokenFetchFailureAction
    | IAuthTokenFetchResetAction

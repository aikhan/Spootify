
import IPlaylist from "../IPlaylist";
import BaseAction from "./BaseAction";

export const PLAYLISTS_FEATURED_FETCH = "PLAYLISTS_FEATURED_FETCH";
export const PLAYLISTS_FEATURED_FETCH_SUCCESS = "PLAYLISTS_FEATURED_FETCH_SUCCESS";
export const PLAYLISTS_FEATURED_FETCH_FAILURE = "PLAYLISTS_FEATURED_FETCH_FAILURE";

export interface IPlaylistsFeaturedFetchAction extends BaseAction {
  type: typeof PLAYLISTS_FEATURED_FETCH
}

export interface IPlaylistsFeaturedFetchSuccessAction extends BaseAction {
  type: typeof PLAYLISTS_FEATURED_FETCH_SUCCESS;
  payload: { playlists: IPlaylist[] };
}

export interface IPlaylistsFeaturedFetchFailureAction extends BaseAction {
  type: typeof PLAYLISTS_FEATURED_FETCH_FAILURE;
  payload: { error: Error };
}

export type PlaylistsAction =
  | IPlaylistsFeaturedFetchAction
  | IPlaylistsFeaturedFetchSuccessAction
  | IPlaylistsFeaturedFetchFailureAction;

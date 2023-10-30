import {
    PLAYLISTS_FEATURED_FETCH,
    PLAYLISTS_FEATURED_FETCH_FAILURE,
    PLAYLISTS_FEATURED_FETCH_SUCCESS,
    IPlaylistsFeaturedFetchAction,
    IPlaylistsFeaturedFetchFailureAction,
    IPlaylistsFeaturedFetchSuccessAction,
} from '../interfaces/ActionInterfaces/PlaylistsActions'

const playlistsFeaturedFetch = (): IPlaylistsFeaturedFetchAction => ({
    type: PLAYLISTS_FEATURED_FETCH,
})

const playlistsFeaturedFetchSuccess = (
    playlists
): IPlaylistsFeaturedFetchSuccessAction => ({
    type: PLAYLISTS_FEATURED_FETCH_SUCCESS,
    payload: {
        playlists: playlists,
    },
})

const playlistsFeaturedFetchFailure = (
    error
): IPlaylistsFeaturedFetchFailureAction => ({
    type: PLAYLISTS_FEATURED_FETCH_FAILURE,
    payload: {
        error: error,
    },
})

export {
    playlistsFeaturedFetch,
    playlistsFeaturedFetchSuccess,
    playlistsFeaturedFetchFailure,
}

import { select, takeLatest, put, call } from 'redux-saga/effects'
import { PLAYLISTS_FEATURED_FETCH } from '../interfaces/ActionInterfaces/PlaylistsActions'
import IPlaylist from '../interfaces/IPlaylist'
import {
    playlistsFeaturedFetchFailure,
    playlistsFeaturedFetchSuccess,
} from '../actions'
import { playlistsFeaturedFetchApi } from '../api'

export const getAuth = (state) => state.auth

export function* handleFeaturedPlaylistsFetch() {
    try {
        console.log('handleFeaturedPlaylistsFetch')

        const auth = yield select(getAuth)

        const featuredPlaylists: IPlaylist[] = yield call(
            playlistsFeaturedFetchApi,
            auth.token
        )

        yield put(playlistsFeaturedFetchSuccess(featuredPlaylists))
    } catch (error) {
        yield put(playlistsFeaturedFetchFailure(error))
    }
}

export default function* playlistsWatcherSaga() {
    yield takeLatest(PLAYLISTS_FEATURED_FETCH, handleFeaturedPlaylistsFetch)
}

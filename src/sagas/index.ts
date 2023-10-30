import { all } from 'redux-saga/effects'

import newReleasesSaga from './newReleasesSaga'
import authSaga from './authSaga'
import playlistsWatcherSaga from './playlistsSaga'
import categoriesWatcherSaga from './categoriesSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        newReleasesSaga(),
        playlistsWatcherSaga(),
        categoriesWatcherSaga(),
    ])
}

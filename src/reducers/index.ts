import { combineReducers } from 'redux'
import newReleasesReducer from './newReleasesReducer'
import authReducer from './authReducer'
import playlistsReducer from './playlistsReducer'
import categoriesReducer from './categoriesReducer'

const appReducer = combineReducers({
    auth: authReducer,
    newReleases: newReleasesReducer,
    playlists: playlistsReducer,
    categories: categoriesReducer,
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer

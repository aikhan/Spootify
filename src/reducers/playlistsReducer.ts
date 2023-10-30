import {
    PLAYLISTS_FEATURED_FETCH_FAILURE,
    PLAYLISTS_FEATURED_FETCH_SUCCESS,
} from '../interfaces/ActionInterfaces/PlaylistsActions'
import IPlaylist from '../interfaces/IPlaylist'
import IPlaylists from '../interfaces/IPlaylists'

const defaultState: IPlaylists = {
    featuredPlaylists: [],
    error: null,
}

const newReleasesReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case PLAYLISTS_FEATURED_FETCH_SUCCESS: {
            return {
                ...state,
                featuredPlaylists: action.payload.playlists,
            }
        }

        case PLAYLISTS_FEATURED_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state
    }
}

export default newReleasesReducer

import {
    NEW_RELEASES_FETCH_FAILURE,
    NEW_RELEASES_FETCH_SUCCESS,
} from '../interfaces/ActionInterfaces/NewReleasesFetchActions'
import INewReleases from '../interfaces/INewReleases'

const defaultState: INewReleases = {
    newReleases: [],
    error: null,
}

const newReleasesReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case NEW_RELEASES_FETCH_SUCCESS: {
            return {
                ...state,
                newReleases: action.payload.newReleases,
            }
        }

        case NEW_RELEASES_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state
    }
}

export default newReleasesReducer

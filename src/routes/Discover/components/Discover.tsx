import { useEffect } from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'
import {
    authTokenFetch,
    categoriesFetch,
    newReleasesFetch,
    playlistsFeaturedFetch,
} from '../../../actions'
import { ConnectedProps, connect } from 'react-redux'

const Discover = ({
    newReleases,
    playlists,
    categories,
    auth,
    ...props
}: DiscoverProps) => {
    useEffect(() => {
        if (!auth.token) {
            props.authTokenFetch()
        } else {
            props.newReleasesFetch()
            props.playlistsFeaturedFetch()
            props.categoriesFetch()
        }
    }, [auth.token])

    return (
        <div className="discover">
            <DiscoverBlock
                text="RELEASED THIS WEEK"
                id="released"
                data={newReleases.newReleases}
            />
            <DiscoverBlock
                text="FEATURED PLAYLISTS"
                id="featured"
                data={playlists.featuredPlaylists}
            />
            <DiscoverBlock
                text="BROWSE"
                id="browse"
                data={categories.categories}
                imagesKey="icons"
            />
        </div>
    )
}

interface DiscoverProps extends PropsFromRedux {
    newReleases: any
    playlists: any
    categories: any
}

const mapStateToProps = ({
    newReleases,
    playlists,
    categories,
    auth,
}: any) => ({
    newReleases,
    playlists,
    categories,
    auth,
})

const mapDispatchToProps = (dispatch: any) => ({
    authTokenFetch: () => dispatch(authTokenFetch()),
    newReleasesFetch: () => dispatch(newReleasesFetch()),
    playlistsFeaturedFetch: () => dispatch(playlistsFeaturedFetch()),
    categoriesFetch: () => dispatch(categoriesFetch()),
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Discover)

import { BASE_URL } from '../constants'
import IAlbum from '../interfaces/IAlbum'

const newReleasesFetchApi = async (accessToken) => {
    try {
        const url = `${BASE_URL}/browse/new-releases`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        })

        const json = await response.json()
        if (response.status === 200) {
            const mainAlbum = json.albums

            const newReleases: IAlbum[] = mainAlbum.items.map((album) => {
                const iAlbum: IAlbum = {
                    id: album.id,
                    albumType: album.album_type,
                    totalTracks: album.total_tracks,
                    availableMarkets: album.availableMarkets,
                    images: album.images.map((image) => {
                        return {
                            url: image.url,
                            height: image.height,
                            width: image.width,
                        }
                    }),
                    name: album.name,
                    releaseDate: album.release_date,
                    artists: album.artists.map((artist) => {
                        return {
                            id: artist.id,
                            name: artist.name,
                        }
                    }),
                }

                return iAlbum
            })

            return newReleases
        } else {
            throw json
        }
    } catch (error) {
        console.log('newReleasesFetchApi - error -> ', error)
        throw error
    }
}

export { newReleasesFetchApi }

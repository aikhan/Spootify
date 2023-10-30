import IAlbum from './IAlbum'

export default interface INewReleases {
    newReleases: IAlbum[]
    error: Error | null
}

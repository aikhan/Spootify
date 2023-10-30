import IImage from './IImage'

export default interface IPlaylist {
    id: string
    images: IImage[]
    name: string
    description: string
}

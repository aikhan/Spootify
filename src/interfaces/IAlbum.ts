import IImage from "./IImage";

export default interface IAlbum {
  id: string;
  albumType: string;
  totalTracks: number;
  availableMarkets: string[];
  images: IImage[];
  name: string;
  releaseDate: string;
  artists: IArtist[];
}

interface IArtist {
  id: string;
  name: string;
}

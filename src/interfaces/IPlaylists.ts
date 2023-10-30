import IPlaylist from "./IPlaylist";

export default interface IPlaylists {
  featuredPlaylists: IPlaylist[];
  error: Error | null;
}

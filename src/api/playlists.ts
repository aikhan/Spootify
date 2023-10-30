import { BASE_URL } from "../constants";
import IPlaylist from "../interfaces/IPlaylist";

const playlistsFeaturedFetchApi = async (accessToken) => {
  try {
    console.log("playlistsFeaturedFetchApi --> ", BASE_URL);

    const url = `${BASE_URL}/browse/featured-playlists`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      // body: JSON.stringify({ payload }),
    });

    const json = await response.json();
    if (response.status === 200) {
      console.log("playlistsFeaturedFetchApi --> ", json);

      const playlists = json.playlists;

      const featuredPlaylists: IPlaylist[] = playlists.items.map((playlist) => {
        const iPlaylist: IPlaylist = {
          id: playlist.id,

          images: playlist.images.map((image) => {
            return {
              url: image.url,
              height: image.height,
              width: image.width,
            };
          }),
          name: playlist.name,
          description: playlist.description,
        };

        return iPlaylist;
      });

      return featuredPlaylists;
    } else {
      throw json;
    }
  } catch (error) {
    console.log("featuredPlaylistsFetchApi - error -> ", error);
    throw error;
  }
};

export { playlistsFeaturedFetchApi };

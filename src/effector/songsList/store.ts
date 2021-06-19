import domain from './domain';
import { fetchGetSongsList } from './effects';

export type TSongItem = {
  name: string;
  artistName: string;
  idSong: string;
  imageCover: string;
  musicFile: string;
};

export const initialStore: { songs: Array<TSongItem> } = { songs: [] };

export const stateSongsList = domain
  .store(initialStore)
  .on(fetchGetSongsList.done, (state, data) => {
    const songList = data.result.map(
      (song: {
        name: string;
        artist_name: string;
        id: string;
        cover_image_path: string;
        music_file_path: string;
      }) => {
        return {
          name: song.name,
          artistName: song.artist_name,
          idSong: song.id,
          imageCover: song.cover_image_path,
          musicFile: song.music_file_path,
        };
      }
    );
    return { songs: songList };
  });

fetchGetSongsList.done.watch(({ result }) => {
  console.log('fetchGetSongsList.done.watch: ', result);
});

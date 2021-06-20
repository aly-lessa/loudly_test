import domain from './domain';
import { fetchGetSongsList } from './effects';
import { fetchLikeSong } from '../controls/effects';

export type TSongItem = {
  name: string;
  artistName: string;
  idSong: string;
  imageCover: string;
  musicFile: string;
  musicMimeType: string | null;
  isLiked?: boolean;
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
        music_file_mimetype: string | null;
      }) => {
        return {
          name: song.name,
          artistName: song.artist_name,
          idSong: song.id,
          imageCover: song.cover_image_path,
          musicFile: song.music_file_path,
          musicMimeType: song.music_file_mimetype,
        };
      }
    );
    return { songs: songList };
  })
  .on(fetchLikeSong.done, (state, data) => {
    const { idInSongsList } = data.params;
    const newState = state;
    newState.songs[idInSongsList].isLiked = !state.songs[idInSongsList].isLiked;
    return { ...state, newState };
  });

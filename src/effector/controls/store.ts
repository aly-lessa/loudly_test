import domain from './domain';
import {
  playTrack,
  nextTrack,
  previousTrack,
  shuffleTracks,
  repeatAllTracks,
  chooseSong,
  endedTrack,
} from './event';
import { stateSongsList } from '../songsList/store';

export type TControls = {
  currentTrack: number;
  flagPlay: boolean;
  flagShuffle: boolean;
  flagRepeat: boolean;
};

const initialState: TControls = {
  currentTrack: 1,
  flagPlay: false,
  flagShuffle: false,
  flagRepeat: false,
};

export const storeControls = domain
  .createStore(initialState)
  .on(playTrack, (state) => {
    return { ...state, flagPlay: !state.flagPlay };
  })
  .on(nextTrack, (state) => {
    const { songs } = stateSongsList.getState();
    const { currentTrack, flagRepeat, flagPlay } = state;
    const isArrayEnd = currentTrack < songs.length - 1;
    const lastTrack = flagRepeat ? 0 : songs.length - 1;
    const nextCurrentTrack = isArrayEnd ? currentTrack + 1 : lastTrack;
    return {
      ...state,
      currentTrack: nextCurrentTrack,
      flagPlay:
        (!isArrayEnd && !flagRepeat) ||
        (!isArrayEnd && !songs[nextCurrentTrack].musicMimeType)
          ? false
          : flagPlay,
    };
  })
  .on(previousTrack, (state) => {
    const { songs } = stateSongsList.getState();
    return {
      ...state,
      currentTrack:
        state.currentTrack > 0 ? state.currentTrack - 1 : songs.length - 1,
    };
    return state;
  })
  .on(chooseSong, (state, id: number) => {
    const { currentTrack, flagPlay } = state;
    return {
      ...state,
      currentTrack: id,
      flagPlay: flagPlay && id === currentTrack ? !flagPlay : true,
    };
  })
  .on(endedTrack, () => {
    nextTrack();
  })
  .on(shuffleTracks, (state) => {
    return { ...state, flagShuffle: !state.flagShuffle };
  })
  .on(repeatAllTracks, (state) => {
    return { ...state, flagRepeat: !state.flagRepeat };
  });

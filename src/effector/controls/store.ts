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
    const { currentTrack, flagRepeat } = state;
    if (flagRepeat) {
      return {
        ...state,
        currentTrack: currentTrack < songs.length - 1 ? currentTrack + 1 : 0,
      };
    }
    return {
      ...state,
      currentTrack:
        currentTrack < songs.length - 1 ? currentTrack + 1 : songs.length - 1,
      flagPlay: false,
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

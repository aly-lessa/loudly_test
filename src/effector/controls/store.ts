import domain from './domain';
import {
  playTrack,
  nextTrack,
  previousTrack,
  shuffleTracks,
  repeatTrack,
} from './event';
import { stateSongsList } from '../songsList/store';

export enum ERepeats {
  noRepeat = 'noRepeat',
  repeatOne = 'repeatOne',
  repeatAll = 'repeatAll',
}

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
    return {
      ...state,
      currentTrack:
        state.currentTrack < songs.length - 1 ? state.currentTrack + 1 : 0,
    };
    return state;
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
  .on(shuffleTracks, (state) => {
    return { ...state, flagShuffle: !state.flagShuffle };
  })
  .on(repeatTrack, (state) => {
    return { ...state, flagPlay: !state.flagPlay };
  });

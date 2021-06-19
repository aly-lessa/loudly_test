import domain from './domain';
import { playTrack } from './event';

export type TControls = {
  currentTrack: number;
  flagPlay: boolean;
};

const initialState: TControls = {
  currentTrack: 1,
  flagPlay: false,
};

export const storeControls = domain
  .createStore(initialState)
  .on(playTrack, (state) => {
    return { ...state, flagPlay: !state.flagPlay };
  });

playTrack.watch(() => {
  console.log('play');
});

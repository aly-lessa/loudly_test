import domain from './domain';
import { playTrack } from './event';

export type TControls = {
  currentTrack: number;
};

const initialState: TControls = {
  currentTrack: 1,
};

export const storeControls = domain
  .createStore(initialState)
  .on(playTrack, (state, payload) => {
    console.log(payload);
    return state;
  });
playTrack.watch((payload) => {
  console.log(payload);
});

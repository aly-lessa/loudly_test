import domain from './domain';

export const playTrack = domain.event();
export const nextTrack = domain.event();
export const previousTrack = domain.event();
export const shuffleTracks = domain.event();
export const repeatTrack = domain.event();

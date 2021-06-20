import domain from './domain';

export const playTrack = domain.event();
export const nextTrack = domain.event();
export const endedTrack = domain.event();
export const previousTrack = domain.event();
export const shuffleTracks = domain.event();
export const repeatAllTracks = domain.event();

export const chooseSong = domain.event<number>();

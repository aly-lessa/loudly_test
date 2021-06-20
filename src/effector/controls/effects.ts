import domain from './domain';
import { sendLikeSong } from '../../api/requests';

export const fetchLikeSong = domain.createEffect(
  (params: { id: string; idInSongsList: number }) => sendLikeSong(params)
);

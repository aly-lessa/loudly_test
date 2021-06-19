import domain from './domain';
import { sendLikeSong } from '../../api/requests';

export const fetchGetSongsList = domain.createEffect((id: string) =>
  sendLikeSong(id)
);

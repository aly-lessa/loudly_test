import domain from './domain';
import { getSongsList } from '../../api/requests';

export const fetchGetSongsList = domain.createEffect(() => getSongsList());

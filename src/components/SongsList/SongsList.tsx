import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from '../Spinner/Spinner';
import SongItem from '../SongItem/SongItem';
import { stateSongsList } from '../../effector/songsList/store';
import { fetchGetSongsList } from '../../effector/songsList/effects';
import Container from '../Container/Container';
import { storeControls } from '../../effector/controls/store';
import Styles from './SongsList.module.css';

const SongsList: React.FC = () => {
  useEffect(() => {
    fetchGetSongsList();
  }, []);
  const { songs } = useStore(stateSongsList);
  const { currentTrack, flagPlay } = useStore(storeControls);

  return (
    <Container>
      {songs.length > 0 ? (
        <ListGroup className={Styles.items} as="ul">
          {songs.map((song, index) => {
            const active = index === currentTrack && flagPlay;
            return (
              <SongItem
                key={index}
                {...song}
                active={active}
                idInPlaylist={index}
              />
            );
          })}
        </ListGroup>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default SongsList;

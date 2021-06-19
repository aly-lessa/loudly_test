import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from '../Spinner/Spinner';
import SongItem from '../SongItem/SongItem';
import { stateSongsList } from '../../effector/songsList/store';
import { fetchGetSongsList } from '../../effector/songsList/effects';
import Container from '../Container/Container';
import { storeControls } from '../../effector/controls/store';

const SongsList: React.FC = () => {
  useEffect(() => {
    fetchGetSongsList();
  }, []);
  const { songs } = useStore(stateSongsList);
  const { currentTrack, flagPlay } = useStore(storeControls);
  return (
    <Container>
      {songs.length > 0 ? (
        <ListGroup as="ul">
          {songs.map((song, index) => {
            const active = index === currentTrack && flagPlay;
            return <SongItem key={index} {...song} active={active} />;
          })}
        </ListGroup>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default SongsList;

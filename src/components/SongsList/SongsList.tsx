import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from '../Spinner/Spinner';
import SongItem from '../SongItem/SongItem';
import { stateSongsList } from '../../effector/songsList/store';
import { fetchGetSongsList } from '../../effector/songsList/effects';
import Container from '../Container/Container';

const SongsList: React.FC = () => {
  useEffect(() => {
    fetchGetSongsList();
  }, []);
  const list = useStore(stateSongsList);
  return (
    <Container>
      {list.songs.length > 0 ? (
        <ListGroup as="ul">
          {list.songs.map((song, index) => {
            return <SongItem key={index} {...song} />;
          })}
        </ListGroup>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default SongsList;

import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import SongItem from '../SongItem/SongItem';
import { stateSongsList } from '../../effector/songsList/store';
import { fetchGetSongsList } from '../../effector/songsList/effects';

const SongsList: React.FC = () => {
  useEffect(() => {
    fetchGetSongsList();
  }, []);
  const list = useStore(stateSongsList);
  return (
    <ListGroup as="ul">
      {list.songs.length > 0 ? (
        list.songs.map((song, index) => {
          return <SongItem key={index} {...song} />;
        })
      ) : (
        <Spinner animation="border" variant="info" />
      )}
    </ListGroup>
  );
};

export default SongsList;

import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import ListGroup from 'react-bootstrap/ListGroup';
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
      {list.songs.map((song, index) => {
        return <SongItem key={index} {...song} />;
      })}
    </ListGroup>
  );
};

export default SongsList;

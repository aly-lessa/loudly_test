import React from 'react';
import { useStore } from 'effector-react';
import Image from 'react-bootstrap/Image';
import Styles from './SongTitle.module.css';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import Spinner from '../Spinner/Spinner';

const SongTitle = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack } = useStore(storeControls);
  if (songs.length > 0) {
    const { artistName, name, imageCover } = songs[currentTrack];
    return (
      <div className={Styles.container}>
        <Image className={Styles.image} src={imageCover} roundedCircle />
        <div className={Styles.name}>{`${artistName} - ${name}`}</div>
      </div>
    );
  }

  return <Spinner />;
};
export default SongTitle;

import React from 'react';
import { useStore } from 'effector-react';
import Button from 'react-bootstrap/Button';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import Audio from '../Audio/Audio';
import { playTrack } from '../../effector/controls/event';

const Controls = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack } = useStore(storeControls);

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          playTrack();
        }}
      >
        play
      </Button>
      {songs[currentTrack] && <Audio />}
    </div>
  );
};

export default Controls;

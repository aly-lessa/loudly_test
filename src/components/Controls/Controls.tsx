import React, { RefObject } from 'react';
import { useStore } from 'effector-react';
import Button from 'react-bootstrap/Button';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';

const Controls = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack } = useStore(storeControls);
  const ref: RefObject<any> = React.createRef();

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          ref.current.play();
        }}
      >
        play
      </Button>
      {songs[currentTrack] && (
        <audio ref={ref} src={songs[currentTrack].musicFile}>
          <track kind="captions" />
        </audio>
      )}
    </div>
  );
};

export default Controls;

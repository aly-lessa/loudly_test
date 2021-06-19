import React, { RefObject, useEffect } from 'react';
import { useStore } from 'effector-react';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';

const Audio = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack, flagPlay } = useStore(storeControls);
  const ref: RefObject<any> = React.createRef();
  useEffect(() => {
    if (flagPlay) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });
  return (
    <audio ref={ref} src={songs[currentTrack].musicFile}>
      <track kind="captions" />
    </audio>
  );
};
export default Audio;

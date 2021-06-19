import React, { RefObject, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import shuffle from '../../utils/shuffle';
import { nextTrack } from '../../effector/controls/event';

const Audio = () => {
  const { songs } = useStore(stateSongsList);
  const [playlist, setPlaylist] = useState(songs);
  const { currentTrack, flagPlay, flagShuffle, flagRepeat } =
    useStore(storeControls);
  const ref: RefObject<any> = React.createRef();
  const onEnded = () => {
    if (flagRepeat) {
      nextTrack();
    }
  };

  useEffect(() => {
    if (flagPlay) {
      if (ref.current.canPlayType(playlist[currentTrack].musicMimeType)) {
        ref.current.play();
      } else {
        nextTrack();
      }
    } else {
      ref.current.pause();
    }
    if (flagShuffle) {
      setPlaylist(shuffle(playlist));
    }
  }, [flagPlay, flagShuffle, ref, playlist, flagRepeat, currentTrack]);

  return (
    <audio onEnded={onEnded} ref={ref} src={playlist[currentTrack].musicFile}>
      <track kind="captions" />
    </audio>
  );
};
export default Audio;

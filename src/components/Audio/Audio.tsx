import React, { RefObject, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import shuffle from '../../utils/shuffle';
import { nextTrack } from '../../effector/controls/event';
import ProgressBar from '../ProgressBar/ProgressBar';
import Styles from './Styles.module.css';

const Audio = () => {
  const { songs } = useStore(stateSongsList);
  const [playlist, setPlaylist] = useState(songs);
  const [time, setTime] = useState({ start: 0, end: 0 });
  const { currentTrack, flagPlay, flagShuffle, flagRepeat } =
    useStore(storeControls);
  const ref: RefObject<any> = React.createRef();
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
  const onEnded = () => {
    nextTrack();
  };
  return (
    <div className={Styles.container}>
      <ProgressBar {...time} />
      <audio
        onTimeUpdate={() =>
          setTime({ start: ref.current.currentTime, end: time.end })
        }
        onPlaying={() =>
          setTime({ end: ref.current.duration, start: time.start })
        }
        onEnded={onEnded}
        ref={ref}
        src={playlist[currentTrack].musicFile}
      >
        <track kind="captions" />
      </audio>
    </div>
  );
};
export default Audio;

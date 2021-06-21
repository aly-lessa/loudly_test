import React, { RefObject, useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import shuffle from '../../utils/shuffle';
import { nextTrack, endedTrack } from '../../effector/controls/event';
import ProgressBar from '../ProgressBar/ProgressBar';
import Styles from './Audio.module.css';

const Audio: React.FC<{ flagRepeatOne?: boolean }> = ({ flagRepeatOne }) => {
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
  const onTimeUpdate = () => {
    if (ref.current.canPlayType(playlist[currentTrack].musicMimeType)) {
      if (ref.current.currentTime - time.start > 0.25) {
        setTime({ start: ref.current.currentTime, end: time.end });
      }
    }
  };
  const onPlaying = () => {
    if (ref.current.canPlayType(playlist[currentTrack].musicMimeType)) {
      setTime({ end: ref.current.duration, start: 0 });
    }
  };
  return (
    <div className={Styles.container}>
      <ProgressBar {...time} />
      <audio
        onTimeUpdate={onTimeUpdate}
        onPlaying={onPlaying}
        onEnded={() => endedTrack()}
        ref={ref}
        src={playlist[currentTrack].musicFile}
        loop={flagRepeatOne && !flagRepeat}
      >
        <track kind="captions" />
      </audio>
    </div>
  );
};
export default Audio;

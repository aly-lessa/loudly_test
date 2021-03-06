import React, { useState } from 'react';
import { useStore } from 'effector-react';
import Container from 'react-bootstrap/Container';
import Button from '../Button/Button';
import Styles from './Controls.module.css';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import Audio from '../Audio/Audio';
import {
  playTrack,
  nextTrack,
  previousTrack,
  shuffleTracks,
  repeatAllTracks,
} from '../../effector/controls/event';
import { fetchLikeSong } from '../../effector/controls/effects';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import shuffle from '../../images/shuffle.svg';
import next from '../../images/next.svg';
import previous from '../../images/previous.svg';
import repeat from '../../images/repeat.svg';
import { EButtonType } from '../Button/types';
import ButtonLike from '../ButtonLike/ButtonLike';
import SongTitle from '../SongTitle/SongTitle';

const Controls = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack, flagPlay, flagRepeat, flagShuffle } =
    useStore(storeControls);
  const [flagRepeatOne, setFlagRepeatOne] = useState(false);

  const onClickButtonRepeat = () => {
    if (!flagRepeatOne) {
      setFlagRepeatOne(true);
    } else {
      if (flagRepeat) {
        setFlagRepeatOne(false);
      }
      repeatAllTracks();
    }
  };

  return (
    <div className={Styles.section}>
      <Container className={Styles.container}>
        <div className={Styles.audio}>
          {songs[currentTrack] && <Audio flagRepeatOne={flagRepeatOne} />}
        </div>
        <SongTitle />
        <div className={Styles.center}>
          <Button
            onClick={onClickButtonRepeat}
            icon={`${repeat}#button_repeat`}
            type={EButtonType.tiny}
            active={flagRepeat || flagRepeatOne}
          >
            {flagRepeatOne && !flagRepeat && 1}
          </Button>
          <Button
            onClick={previousTrack}
            icon={`${previous}#button_previous`}
            type={EButtonType.medium}
          />
          <Button
            onClick={playTrack}
            icon={!flagPlay ? `${play}#button_play` : `${pause}#button_pause`}
            type={EButtonType.big}
          />
          <Button
            onClick={nextTrack}
            icon={`${next}#button_next`}
            type={EButtonType.medium}
          />
          <Button
            onClick={shuffleTracks}
            icon={`${shuffle}#button_shuffle`}
            type={EButtonType.tiny}
            active={flagShuffle}
          />
        </div>
        <div />
        <div className={Styles.right}>
          <ButtonLike
            onClick={() => {
              fetchLikeSong({
                id: songs[currentTrack].idSong,
                idInSongsList: currentTrack,
              });
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Controls;

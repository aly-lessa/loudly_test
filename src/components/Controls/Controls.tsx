import React from 'react';
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
  repeatTrack,
} from '../../effector/controls/event';
import { fetchGetSongsList } from '../../effector/controls/effects';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import shuffle from '../../images/shuffle.svg';
import next from '../../images/next.svg';
import previous from '../../images/previous.svg';
import repeat from '../../images/repeat.svg';
import { EButtonType } from '../Button/types';
import ButtonLike from '../ButtonLike/ButtonLike';

const Controls = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack, flagPlay } = useStore(storeControls);
  return (
    <Container className={Styles.container}>
      <div className={Styles.audio}>{songs[currentTrack] && <Audio />}</div>
      <div />
      <div className={Styles.center}>
        <Button
          onClick={repeatTrack}
          icon={`${repeat}#button_repeat`}
          type={EButtonType.tiny}
        />
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
        />
      </div>
      <div>
        <ButtonLike
          onClick={() => {
            fetchGetSongsList(songs[currentTrack].idSong);
          }}
        />
      </div>
    </Container>
  );
};

export default Controls;

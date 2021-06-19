import React from 'react';
import { useStore } from 'effector-react';
import Container from 'react-bootstrap/Container';
import Button from '../Button/Button';
import Styles from './Controls.module.css';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import Audio from '../Audio/Audio';
import { playTrack } from '../../effector/controls/event';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import like from '../../images/like.svg';
import shuffle from '../../images/shuffle.svg';
import next from '../../images/next.svg';
import previous from '../../images/previous.svg';
import repeat from '../../images/repeat.svg';
import { EButtonType } from '../Button/types';

const Controls = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack, flagPlay } = useStore(storeControls);

  return (
    <Container className={Styles.container}>
      <Button
        onClick={() => {
          playTrack();
        }}
        icon={`${repeat}#button_repeat`}
        type={EButtonType.tiny}
      />
      <Button
        onClick={() => {
          playTrack();
        }}
        icon={`${previous}#button_previous`}
        type={EButtonType.medium}
      />
      <Button
        onClick={() => {
          playTrack();
        }}
        icon={!flagPlay ? `${play}#button_play` : `${pause}#button_pause`}
        type={EButtonType.big}
      />
      <Button
        onClick={() => {
          playTrack();
        }}
        icon={`${next}#button_next`}
        type={EButtonType.medium}
      />
      <Button
        onClick={() => {
          playTrack();
        }}
        icon={`${shuffle}#button_shuffle`}
        type={EButtonType.tiny}
      />
      <Button
        onClick={() => {
          playTrack();
        }}
        icon={`${like}#button_like`}
        type={EButtonType.tiny}
        simple
      />
      {songs[currentTrack] && <Audio />}
    </Container>
  );
};

export default Controls;

import React from 'react';
import { useStore } from 'effector-react';
import Button from '../Button/Button';
import { stateSongsList } from '../../effector/songsList/store';
import { storeControls } from '../../effector/controls/store';
import Audio from '../Audio/Audio';
import { playTrack } from '../../effector/controls/event';
import play from '../../images/play.svg';
import { EButtonType } from '../Button/types';

const Controls = () => {
  const { songs } = useStore(stateSongsList);
  const { currentTrack } = useStore(storeControls);

  return (
    <div>
      <Button
        onClick={() => {
          playTrack();
        }}
        icon={`${play}#button_play`}
        type={EButtonType.big}
      />
      {songs[currentTrack] && <Audio />}
    </div>
  );
};

export default Controls;

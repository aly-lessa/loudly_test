import React from 'react';
import Item from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';
import classNames from 'classnames';
import Styles from './SongItem.module.css';
import play from '../../images/icon_play.svg';
import { TSongItem } from '../../effector/songsList/store';
import { fetchGetSongsList } from '../../effector/controls/effects';
import ButtonLike from '../ButtonLike/ButtonLike';

type TProps = TSongItem & { active?: boolean };

const SongItem: React.FC<TProps> = ({
  name,
  artistName,
  imageCover,
  idSong,
  active,
}) => {
  const style = classNames(Styles.container, active && Styles.active);
  return (
    <Item className={style}>
      <div className={Styles.icons}>
        <Image className={Styles.image} src={imageCover} roundedCircle />
        {active && (
          <svg xmlns="http://www.w3.org/2000/svg">
            <use href={`${play}#icon_play`} />
          </svg>
        )}
      </div>

      <div className={Styles.name}>{`${artistName} - ${name}`}</div>
      <ButtonLike
        onClick={() => {
          fetchGetSongsList(idSong);
        }}
      />
    </Item>
  );
};

export default SongItem;

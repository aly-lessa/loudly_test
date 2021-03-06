import React, { SyntheticEvent } from 'react';
import Item from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';
import classNames from 'classnames';
import Styles from './SongItem.module.css';
import play from '../../images/icon_play.svg';
import { TSongItem } from '../../effector/songsList/store';
import { fetchLikeSong } from '../../effector/controls/effects';
import ButtonLike from '../ButtonLike/ButtonLike';
import { chooseSong } from '../../effector/controls/event';

type TProps = TSongItem & { active?: boolean; idInPlaylist: number };

const SongItem: React.FC<TProps> = ({
  name,
  artistName,
  imageCover,
  idSong,
  active,
  idInPlaylist,
  isLiked,
}) => {
  const style = classNames(Styles.container, active && Styles.active);
  const onClickLike = (e: SyntheticEvent) => {
    e.stopPropagation();
    fetchLikeSong({ id: idSong, idInSongsList: idInPlaylist });
  };
  return (
    <Item className={style} onClick={() => chooseSong(idInPlaylist)}>
      <div className={Styles.icons}>
        <Image className={Styles.image} src={imageCover} roundedCircle />
        {active && (
          <svg xmlns="http://www.w3.org/2000/svg">
            <use href={`${play}#icon_play`} />
          </svg>
        )}
      </div>

      <div className={Styles.name}>{`${artistName} - ${name}`}</div>
      <ButtonLike onClick={onClickLike} active={isLiked} />
    </Item>
  );
};

export default SongItem;

import React from 'react';
import Item from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';
import Styles from './SongItem.module.css';

import { TSongItem } from '../../effector/songsList/store';

const SongItem: React.FC<TSongItem> = ({ name, artistName, imageCover }) => {
  return (
    <Item className={Styles.container}>
      <Image className={Styles.image} src={imageCover} roundedCircle />
      {`${artistName} - ${name}`}
    </Item>
  );
};

export default SongItem;

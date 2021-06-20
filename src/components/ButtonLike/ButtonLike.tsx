import React, { SyntheticEvent } from 'react';
import classNames from 'classnames';
import like from '../../images/like.svg';
import Styles from './ButtonLike.module.css';

type TProps = {
  onClick: (e: SyntheticEvent) => void;
  active?: boolean;
};
const ButtonLike: React.FC<TProps> = ({ onClick, active }) => {
  const style = classNames(Styles.button, active && Styles.active);
  return (
    <button type="button" className={style} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <use href={`${like}#button_like`} />
      </svg>
    </button>
  );
};
export default ButtonLike;

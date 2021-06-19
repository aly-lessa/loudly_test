import React from 'react';
import like from '../../images/like.svg';
import Styles from './ButtonLike.module.css';

const ButtonLike: React.FC<{ onClick: VoidFunction }> = ({ onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={Styles.button} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <use href={`${like}#button_like`} />
      </svg>
    </div>
  );
};
export default ButtonLike;

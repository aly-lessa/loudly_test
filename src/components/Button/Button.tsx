import React from 'react';
import ButtonBootstrap from 'react-bootstrap/Button';
import classNames from 'classnames';
import { EButtonType, TButtonProps } from './types';
import Styles from './Button.module.css';

const Button: React.FC<TButtonProps> = ({ onClick, icon, type, children }) => {
  const style = classNames(
    Styles.button,
    icon && Styles.buttonIcon,
    type === EButtonType.big && Styles.big
  );
  return (
    <ButtonBootstrap className={style} variant="primary" onClick={onClick}>
      {icon && (
        <svg xmlns="http://www.w3.org/2000/svg">
          <use href={icon} />
        </svg>
      )}
      {children}
    </ButtonBootstrap>
  );
};

export default Button;

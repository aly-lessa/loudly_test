import React from 'react';
import classNames from 'classnames';
import { EButtonType, TButtonProps } from './types';
import Styles from './Button.module.css';

const Button: React.FC<TButtonProps> = ({
  onClick,
  icon,
  type,
  children,
  active,
}) => {
  const style = classNames(
    Styles.button,
    icon && Styles.buttonIcon,
    type === EButtonType.big && Styles.big,
    type === EButtonType.medium && Styles.medium,
    type === EButtonType.tiny && Styles.tiny,
    active && Styles.active
  );
  return (
    <button className={style} type="button" onClick={() => onClick()}>
      {icon && (
        <svg xmlns="http://www.w3.org/2000/svg">
          <use href={icon} />
        </svg>
      )}
      {children && <div className={Styles.text}>{children}</div>}
    </button>
  );
};

export default Button;

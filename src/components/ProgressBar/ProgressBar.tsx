import React from 'react';
import Styles from './ProgressBar.module.css';
import secondsToMinutes from '../../utils/secondsToMinutes';

const ProgressBar: React.FC<{ start: number; end: number }> = ({
  end,
  start,
}) => {
  const style = {
    width: `${((end - start) / end) * 100}%`,
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.back} />
      <div style={style} className={Styles.up} />
      <div className={Styles.restTime}>{secondsToMinutes(start)}</div>
    </div>
  );
};
export default ProgressBar;

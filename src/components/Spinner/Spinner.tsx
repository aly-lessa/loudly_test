import React from 'react';
import SpinnerBootstrap from 'react-bootstrap/Spinner';
import Styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <SpinnerBootstrap
      className={Styles.spinner}
      animation="border"
      variant="info"
    />
  );
};

export default Spinner;

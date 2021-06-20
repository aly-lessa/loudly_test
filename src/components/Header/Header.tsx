import React from 'react';
import Container from 'react-bootstrap/Container';
import Styles from './Header.module.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <div className={Styles.section}>
      <Container className={Styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <use href={`${logo}#logo`} />
        </svg>
        <div />
        <div className={Styles.enter}>Login in</div>
      </Container>
    </div>
  );
};

export default Header;

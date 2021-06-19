import React from 'react';
import ContainerBootstrap from 'react-bootstrap/Container';
import Styles from './Container.module.css';

const Container: React.FC = ({ children }) => {
  return (
    <ContainerBootstrap className={Styles.container}>
      {children}
    </ContainerBootstrap>
  );
};

export default Container;

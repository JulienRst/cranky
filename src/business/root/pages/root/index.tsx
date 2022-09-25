import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const Root: React.FC = () => {
  return (
    <div className={styles.page}>
      <Outlet />
    </div>
  );
};

export default Root;

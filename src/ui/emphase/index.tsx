import React, { PropsWithChildren } from 'react';
import styles from './index.module.scss';

const Emphase: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className={styles.emphase}>{children}</span>;
};

export default Emphase;

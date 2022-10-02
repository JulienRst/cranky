import routes from 'business/router/routes';
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import Emphase from 'ui/emphase';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Spacer align="center" justify="center" className={styles.container}>
      <div className={styles.content}>
        {children}
        <Link to={routes.gallery} className={styles.close}>
          <Emphase>X</Emphase>
        </Link>
      </div>
    </Spacer>
  );
};

export default Modal;

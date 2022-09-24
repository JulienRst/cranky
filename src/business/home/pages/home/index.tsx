import Presentation from 'business/home/components/presentation';
import Illustration from 'business/home/components/illustration';
import React from 'react';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  return (
    <Spacer className={styles.page} size="extra-large" grow direction="horizontal">
      <Presentation />
      <Illustration />
    </Spacer>
  );
}

export default HomePage;
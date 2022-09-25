import Presentation from 'business/home/components/presentation';
import Illustration from 'business/home/components/illustration';
import React from 'react';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';
import useBreakpoint from 'technical/breakpoint/hook';

const HomePage: React.FC = () => {
  const { isHigherThanDesktop } = useBreakpoint();

  return (
    <Spacer
      className={styles.page}
      size={isHigherThanDesktop ? 'extra-large' : 'no-space'}
      justify={isHigherThanDesktop ? undefined : 'space-around'}
      grow
      direction={isHigherThanDesktop ? 'horizontal' : 'vertical'}
    >
      <Presentation />
      <Illustration />
    </Spacer>
  );
};

export default HomePage;

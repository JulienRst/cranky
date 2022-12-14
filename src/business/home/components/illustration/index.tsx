import classnames from 'classnames';
import React from 'react';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

interface IllustrationProps {
  className?: string;
}

const Illustration: React.FC<IllustrationProps> = ({ className }) => {
  return (
    <Spacer
      className={classnames(styles.ctnIllustration, className)}
      justify="center"
    >
      <div className={styles.illustration} />
    </Spacer>
  );
};

export default Illustration;

import React from 'react';
import { Trans } from 'react-i18next';
import Emphase from 'ui/emphase';
import Spacer from 'ui/spacer';
import Title from '../title';
import styles from './index.module.scss';

interface PresentationProps {
  className?: string;
}

const Presentation: React.FC<PresentationProps> = ({ className }) => {
  return (
    <Spacer className={className} direction="vertical" justify="center" align="center" size="no-space">
      <Title width={450} />
      <p className={styles.subtitle}><Trans i18nKey="home.subtitle">a<Emphase>b</Emphase>c<Emphase>d</Emphase></Trans></p>
    </Spacer>
  )
}

export default Presentation;
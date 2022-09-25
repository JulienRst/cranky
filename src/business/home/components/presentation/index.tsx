import React from 'react';
import { Trans } from 'react-i18next';
import useBreakpoint from 'technical/breakpoint/hook';
import Emphase from 'ui/emphase';
import Spacer from 'ui/spacer';
import Title from '../title';
import styles from './index.module.scss';

interface PresentationProps {
  className?: string;
}

const Presentation: React.FC<PresentationProps> = ({ className }) => {
  const { isHigherThanDesktop } = useBreakpoint();
  return (
    <Spacer
      className={className}
      direction="vertical"
      justify="center"
      align="center"
      size="no-space"
    >
      <Title width={isHigherThanDesktop ? 450 : 300} />
      <p className={styles.subtitle}>
        <Trans i18nKey="home.subtitle">
          a<Emphase>b</Emphase>c<Emphase>d</Emphase>
        </Trans>
      </p>
    </Spacer>
  );
};

export default Presentation;

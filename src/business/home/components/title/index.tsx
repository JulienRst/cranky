import routes from 'business/router/routes';
import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import useBreakpoint from 'technical/breakpoint/hook';
import Emphase from 'ui/emphase';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';
import Logo from './logo';

type LogoSize = 'small' | 'large';

function resolveLogoSize(size: LogoSize, isHigherThanDesktop: boolean): number {
  switch (true) {
    case size === 'large' && isHigherThanDesktop:
      return 450;
    case size === 'large' && !isHigherThanDesktop:
    case size === 'small' && isHigherThanDesktop:
      return 300;
    case size === 'small' && !isHigherThanDesktop:
    default:
      return 200;
  }
}

interface ContentProps {
  size: LogoSize;
  className?: string;
}

const Content: React.FC<ContentProps> = ({ className, size }) => {
  const { isHigherThanDesktop } = useBreakpoint();

  return (
    <Spacer
      className={className}
      size="no-space"
      align="center"
      direction="vertical"
    >
      <Logo width={resolveLogoSize(size, isHigherThanDesktop)} />
      <p className={styles.subtitle}>
        <Trans i18nKey="home.subtitle">
          a<Emphase>b</Emphase>c<Emphase>d</Emphase>
        </Trans>
      </p>
    </Spacer>
  );
};

interface TitleProps extends ContentProps {
  link?: routes;
}

const Title: React.FC<TitleProps> = ({ size, className, link }) => {
  return link ? (
    <Link className={className} to={link}>
      <Content size={size} />
    </Link>
  ) : (
    <Content size={size} className={className} />
  );
};

export default Title;

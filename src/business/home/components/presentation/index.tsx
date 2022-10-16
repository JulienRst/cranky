import routes from 'business/router/routes';
import React from 'react';
import useBreakpoint from 'technical/breakpoint/hook';
import Spacer from 'ui/spacer';
import Nav from '../nav';
import Socials from '../socials';
import Title from '../title';
interface PresentationProps {
  className?: string;
}

const Presentation: React.FC<PresentationProps> = ({ className }) => {
  const { isHigherThanDesktop } = useBreakpoint();
  return (
    <Spacer
      className={className}
      direction="vertical"
      justify={isHigherThanDesktop ? 'space-between' : 'center'}
      align="center"
      size="extra-large"
      grow
    >
      <Nav />
      <Title size="large" link={routes.gallery} />
      <Socials />
    </Spacer>
  );
};

export default Presentation;

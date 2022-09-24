import React, { PropsWithChildren } from 'react';
import './index.module.scss';

interface TypographyProps extends PropsWithChildren {
  h: 1 | 2 | 3 | 4 | 5;
}

const Typography: React.FC<TypographyProps> = ({ h, children , ...rest }) => {
  switch (h) {
    case 1:
      return <h1 {...rest}>{children}</h1>;
    case 2:
      return <h2 {...rest}>{children}</h2>;
    case 3:
      return <h3 {...rest}>{children}</h3>;
    case 4:
      return <h4 {...rest}>{children}</h4>;
    case 5:
    default:
      return <h5 {...rest}>{children}</h5>;
  }
}

export default Typography;
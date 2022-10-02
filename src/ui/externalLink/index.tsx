import React, { PropsWithChildren } from 'react';

interface ExternalLinkProps extends PropsWithChildren {
  to: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;

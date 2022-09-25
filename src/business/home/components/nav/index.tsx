import routes from 'business/router/routes';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Emphase from 'ui/emphase';
import Spacer from 'ui/spacer';

const Separator: React.FC = () => <Emphase>/</Emphase>;

const Nav: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    {
      name: 'illustration',
      path: routes.gallery,
      label: t('nav.gallery'),
    },
    {
      name: 'contact',
      path: routes.contact,
      label: t('nav.contact'),
    },
  ];

  return (
    <nav>
      <Spacer size="large">
        {data.map((item, index) => (
          <Fragment key={item.name}>
            <NavLink to={item.path}>{item.label}</NavLink>
            {index !== data.length - 1 ? <Separator /> : null}
          </Fragment>
        ))}
      </Spacer>
    </nav>
  );
};

export default Nav;

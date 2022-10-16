import Item from 'business/gallery/components/item';
import { useGallery } from 'business/gallery/services/hooks/list';
import Nav from 'business/home/components/nav';
import Title from 'business/home/components/title';
import routes from 'business/router/routes';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Cell from 'ui/cell';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

const ListPage: React.FC = () => {
  const { items } = useGallery();

  if (!items || items.length < 3) {
    return null;
  }

  const firstItems = items.slice(0, 3);
  const restItems = items.slice(3, undefined);

  let rows = [];
  for (let i = 0; i < restItems.length; i += 2) {
    rows.push([restItems[i], restItems[i + 1]]);
  }

  return (
    <>
      <div className={styles.container}>
        <Title
          link={routes.home}
          className={styles.titleContainer}
          size="small"
        />
        <Spacer className={styles.navContainer} justify="center" align="center">
          <Nav />
        </Spacer>
        {/* for the list to work as it should, we need to get the first three items and then display everything else */}
        <Cell className={styles.firstRowFirstCol}>
          <Item className={styles.images} {...firstItems[0]} />
        </Cell>
        <Cell className={styles.firstRowSecondCol}>
          <Item className={styles.images} {...firstItems[1]} />
        </Cell>
        <Cell className={styles.firstRowThirdCol}>
          <Item className={styles.images} {...firstItems[2]} />
        </Cell>
        {rows.map((row) => (
          <div key={row[0].id} className={styles.secondRow}>
            <Cell key={row[0].id} className={styles.secondRowFirstCol}>
              <Item className={styles.images} {...row[0]} />
            </Cell>
            {row[1] ? (
              <Cell key={row[1].id} className={styles.secondRowSecondCol}>
                <Item className={styles.images} {...row[1]} />
              </Cell>
            ) : null}
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default ListPage;

import Nav from 'business/home/components/nav';
import Title from 'business/home/components/title';
import React from 'react';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

const ListPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title link className={styles.titleContainer} size="small" />
      <Spacer className={styles.navContainer} justify="center" align="center">
        <Nav />
      </Spacer>
      <div className={styles.firstRowFirstCol}>
        <img className={styles.images} src="http://placekitten.com/700/500" />
      </div>
      <div className={styles.firstRowSecondCol}>
        <img className={styles.images} src="http://placekitten.com/500/700" />
      </div>
      <div className={styles.firstRowThirdCol}>
        <img className={styles.images} src="http://placekitten.com/500/700" />
      </div>
      <div className={styles.secondRow}>
        <div className={styles.secondRowFirstCol}>
          <img className={styles.images} src="http://placekitten.com/850/610" />
        </div>
        <div className={styles.secondRowSecondCol}>
          <img className={styles.images} src="http://placekitten.com/850/610" />
        </div>
      </div>
    </div>
  );
};

export default ListPage;

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import styles from './index.module.scss';

interface CellProps extends PropsWithChildren {
  className?: string;
}
const Cell: React.FC<CellProps> = ({ className, children }) => {
  return <div className={classNames(styles.cell, className)}>{children}</div>;
};

export default Cell;

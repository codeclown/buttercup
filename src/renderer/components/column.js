import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from '../styles/column';

const Column = ({
  children,
  footer = null,
  header = null,
  className = null,
  contentClassName = null,
  light = false,
  ...rest
}) => (
  <div className={cx(styles.column, className)} {...rest}>
    {header && <header className={cx(styles.bar, styles.header)}>
      {header}
    </header>}
    <section className={cx(styles.content, contentClassName)}>
    {children}
    </section>
    {footer && <footer className={cx(styles.bar, styles.footer, light && styles.light)}>
      {footer}
    </footer>}
  </div>
);

Column.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  light: PropTypes.bool
};

export default Column;

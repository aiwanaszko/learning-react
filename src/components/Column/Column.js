import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    columnTitle: PropTypes.string,
  }

  render() {
    return (
      <section classNames={styles.component}>
        <h3 classNames={styles.title}></h3>
        <div>{this.props.columnTitle}</div>
      </section>
    )
  }
}

export default Column;

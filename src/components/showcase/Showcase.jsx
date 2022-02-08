import React from 'react';
import styles from './Showcase.module.css';
import PropTypes from 'prop-types';

class Showcase extends React.Component {
  render() {
    return (
      <div className={styles.showcase}>
        <h1 className="heading-1">{this.props.title}</h1>
      </div>
    );
  }
}

Showcase.propTypes = {
  title: PropTypes.string,
};

export default Showcase;

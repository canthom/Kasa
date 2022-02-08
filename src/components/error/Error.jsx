import React from 'react';
import styles from './Error.module.css';

class Error extends React.Component {
  render() {
    return (
      <>
        <div className={styles.error}>
          <span>Oups!</span>
          <span>Les données n'ont pu être chargées</span>
        </div>
      </>
    );
  }
}

export default Error;

import React from 'react';
import styles from './Loader.module.css';
import { NavLink } from 'react-router-dom';

class Loader extends React.Component {
  render() {
    return (
      <>
        <div className={styles.loader}>
          <span>Attendez!</span>
          <span>Cette page est en cours de chargement...</span>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
      </>
    );
  }
}

export default Loader;

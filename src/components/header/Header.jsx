import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo-Header.svg';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <span className={styles.header__logo}>
          <img src={logo} alt="Logo de Kasa" />
        </span>

        <div className={styles.header__links}>
          <NavLink
            to="/"
            exact
            className={styles.header__link}
            activeClassName={styles.active}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/about"
            className={styles.header__link}
            activeClassName={styles.active}
          >
            A Propos
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;

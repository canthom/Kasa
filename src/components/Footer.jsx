import React from 'react'
import logo from './assets/Logo-Footer.svg'
import styles from './Footer.module.css'

class Footer extends React.Component {
  render () {
    return (
      <footer className={styles.footer}>
        <span className={styles.footer__logo}>
          <img src={logo} alt="Logo de Kasa" />
        </span>
        <span className={styles.footer__copyrights}>
          &copy; 2020 Kasa. All rights reserved
        </span>
      </footer>
    )
  }
}

export default Footer
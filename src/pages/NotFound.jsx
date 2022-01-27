import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NotFound.module.css'

class NotFound extends React.Component {
  render() {
    return (
      <>
        <div className={styles.error}>
          <span>404</span>
          <span>Oups! La page que vous demandez n'existe pas.</span>
          <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
        </div>
      </>
    )
  }
}

export default NotFound
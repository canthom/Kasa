import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <Link
        className={styles.card__container}
        to={`/location/${this.props.id}`}
      >
        <div
          className={styles.card}
          style={{
            backgroundImage: `url(${this.props.cover})`,
            backgroundPosition: 'center',
          }}
        >
          <h3 className="heading-3">{this.props.title}</h3>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;

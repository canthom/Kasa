import React from 'react';
import styles from './LocationInfo.module.css';
import PropTypes from 'prop-types';

class LocationInfo extends React.Component {
  render() {
    const getRating = (ratingNumber) => {
      let n = 0;
      let stars = [];
      while (n < ratingNumber) {
        n++;

        stars.push(
          <li key={n}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#FF6060"
              />
            </svg>
          </li>
        );
      }

      let count = ratingNumber;
      while (count < 5) {
        count++;

        stars.push(
          <li key={count}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#E3E3E3"
              />
            </svg>
          </li>
        );
      }
      return stars;
    };

    return (
      <div className={styles.location}>
        <div className={styles.locationTop}>
          <div className={styles.locationTitle}>
            <h2>{this.props.title}</h2>
            <span>{this.props.location}</span>
          </div>

          <div className={styles.locationAuthor}>
            <span>{this.props.author.name}</span>
            <div>
              <img src={this.props.author.picture} alt="Author" />
            </div>
          </div>
        </div>

        <div className={styles.locationBottom}>
          <div className={styles.locationTags}>
            {this.props.tags.map((element) => {
              return (
                <div className={styles.locationTag} key={element}>
                  {element}
                </div>
              );
            })}
          </div>

          <div className={styles.locationNote}>
            <ul className={styles.locationStars}>
              {getRating(this.props.rating)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

LocationInfo.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  author: PropTypes.object,
  tags: PropTypes.array,
  rating: PropTypes.string,
};

export default LocationInfo;

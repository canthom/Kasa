import React from 'react';
import chevron from '../assets/Chevron-Carrousel.svg';
import styles from './Carrousel.module.css';
import PropTypes from 'prop-types';

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };

    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
  }

  goToNextSlide() {
    const lastIndex = this.props.pictures.length - 1;
    const { activeIndex } = this.state;
    const shouldResetIndex = activeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : activeIndex + 1;
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide() {
    const lastIndex = this.props.pictures.length - 1;
    const { activeIndex } = this.state;
    const shouldResetIndex = activeIndex === 0;
    const index = shouldResetIndex ? lastIndex : activeIndex - 1;
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className={styles.carrousel}>
        {this.props.pictures.length === 1 ? null : (
          <>
            <img
              src={chevron}
              alt="Précédent"
              className={styles.chevron}
              onClick={this.goToPrevSlide}
            />
            <img
              src={chevron}
              alt="Suivant"
              className={styles.chevron}
              onClick={this.goToNextSlide}
            />
            <span className={styles.pagination}>
              {this.state.activeIndex + 1} / {this.props.pictures.length}
            </span>
          </>
        )}

        {this.props.pictures.map((element, index) => {
          return (
            <div
              key={index}
              className={`${
                index === this.state.activeIndex
                  ? styles.active
                  : styles.inactive
              }`}
            >
              {index === this.state.activeIndex && (
                <img
                  src={element}
                  alt="Photographie de l'appartement"
                  className={styles.image}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

Carrousel.propTypes = {
  pictures: PropTypes.array,
};

export default Carrousel;

import React from 'react';
import chevron from '../assets/Chevron-Dropdown.svg';
import styles from './Dropdown.module.css';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  state = { isActive: false };

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;
    return (
      <div
        className={`${styles.dropdown} ${
          this.props.page ? styles.dropdownAbout : null
        }`}
      >
        <div className={styles.dropdown__top} onClick={this.handleClick}>
          <span className={styles.dropdown__title}>{this.props.title}</span>
          <img
            className={`${styles.dropdown__chevron} ${
              isActive ? styles.openChev : null
            }`}
            src={chevron}
            alt="Dropdown Toggle Icon"
          />
        </div>
        <div
          className={`${styles.dropdown__bottom} ${
            isActive ? styles.openTxt : null
          }`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  title: 'Title',
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis enim condimentum justo aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et.`,
};

Dropdown.propTypes = {
  title: PropTypes.string,
};

export default Dropdown;

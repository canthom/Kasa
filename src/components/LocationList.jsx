import React from 'react';
import Card from './Card';
import styles from './LocationList.module.css';

class LocationList extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.locations.map((element) => {
          return (
            <Card
              title={element.title}
              cover={element.cover}
              key={element.id}
              id={element.id}
            />
          );
        })}
      </div>
    );
  }
}

export default LocationList;

import React from 'react';
import Carrousel from '../components/Carrousel';
import LocationInfo from '../components/LocationInfo';
import Dropdown from '../components/Dropdown';
import styles from './Location.module.css';

class Location extends React.Component {
  render() {
    const dataFiltered = this.props.data.filter(
      (element) => element.id === this.props.match.params.id
    );
    const locationInfo = dataFiltered[0];

    if (locationInfo.id != this.props.match.params.id) {
      alert('coucou cé mwa');
    }
    return (
      <>
        <Carrousel pictures={locationInfo.pictures} />
        <LocationInfo
          title={locationInfo.title}
          location={locationInfo.location}
          author={locationInfo.host}
          tags={locationInfo.tags}
          rating={locationInfo.rating}
        />

        <div className={styles.container}>
          <Dropdown title="Description">
            <p className={styles.dropdown__text}>{locationInfo.description}</p>
          </Dropdown>
          <Dropdown title="Équipements">
            <ul>
              {locationInfo.equipments.map((element, index) => {
                return <li key={index}>{element}</li>;
              })}
            </ul>
          </Dropdown>
        </div>
      </>
    );
  }
}

export default Location;

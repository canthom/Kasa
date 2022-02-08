import React from 'react';
import { Redirect } from 'react-router-dom';
import Carrousel from '../../components/carrousel/Carrousel';
import LocationInfo from '../../components/locationInfo/LocationInfo';
import Dropdown from '../../components/dropdown/Dropdown';
import styles from './Location.module.css';
import Loader from '../../components/loader/Loader';

class Location extends React.Component {
  render() {
    let dataFiltered = this.props.locations.filter(
      (element) => element.id === this.props.match.params.id
    );

    const dataNotLoaded = dataFiltered.length === 0;
    const locationInfo = dataFiltered[0];

    if (this.props.isLoaded === false) {
      return <Loader />;
    }

    return dataNotLoaded ? (
      <Redirect to="/NotFound" />
    ) : (
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

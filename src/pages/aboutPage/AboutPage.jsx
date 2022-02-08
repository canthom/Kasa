import React from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import Showcase from '../../components/showcase/Showcase';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Showcase />
        <Dropdown title="Fiabilité" page="about">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Dropdown>
        <Dropdown title="Respect" page="about">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Dropdown>
        <Dropdown title="Service" page="about">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Dropdown>
        <Dropdown title="Responsabilité" page="about">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Dropdown>
      </>
    );
  }
}

export default AboutPage;

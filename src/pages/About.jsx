//Import React
import React from 'react'
//Import our components
import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
//Import our style for this page
import '../styles/Logement.css'
//Import Banner's image
import Lake from '../assets/lake-mountains.png'

/**
 * our About page with all components
 * @returns 
 */
function About() {
    return (
        <div className='about'>
            <Banner 
                image={Lake}
                title={''}
                alt={'Lac avec des montagnes autour'}
            />

            <Collapse
                title={'Fiabilité'}
                size={'90'}
                infos={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}
            />

            <Collapse
                title={'Respect'}
                size={'90'}
                infos={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
            />

            <Collapse
                title={'Services'}
                size={'90'}
                infos={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
            />

            <Collapse
                title={'Sécurité'}
                size={'90'}
                infos={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
            />
        </div>
    );
}

export default About
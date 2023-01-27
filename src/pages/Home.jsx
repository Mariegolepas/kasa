import React from 'react'
import logements from '../datas/logements.json'
import Card from '../components/Card/index'
import Banner from '../components/Banner/index'
import Carrousel from '../components/Carrousel'
import '../styles/Home.css'

function Logements() {
    return (
        <div className='home'>
            <Banner>
                <div className='home__banner'>
                    <img src='../assets/mountain.png' alt='Falaises' className='home__banner__image' />
                    <h1 className='home__banner__title'>
                        Chez vous, partout et ailleurs
                    </h1>
                </div>
            </Banner>
            <Carrousel>
                {logements.map((Logements) => (
                    <Card
                        key={Logements.id}
                        id={Logements.id}
                        picture={Logements.cover}
                        title={Logements.title}
                    />))}
            </Carrousel>
        </div>
    )
}

export default Logements

/* {<h1>Page d'accueil</h1>
            {logements.map((logement, index) => (
                <Card
                    key={`${logement.name}-${index}`}
                    label={logement.jobTitle}
                    picture={logement.picture}
                    title={logement.name}
                />
            ))}} */
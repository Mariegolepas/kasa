import React from 'react'
import logements from '../datas/logements.json'
import Card from '../components/Card/index'
import Banner from '../components/Banner/index'
import Carrousel from '../components/Carrousel'
import '../styles/Home.css'
import Mountain from '../assets/mountain.png'

function Home() {
    return (
        <div className='home'>
            <Banner
                key={'Banner1'}
                image={Mountain}
                alt={'Falaises'}
                title={'Chez vous, partout et ailleurs'}
            />
            {/* <Banner>
                <div className='home__banner'>
                    <img src={Mountain} alt='Falaises' className='home__banner__image' />
                    <h1 className='home__banner__title'>
                        Chez vous, partout et ailleurs
                    </h1>
                </div>
            </Banner> */}

            <Carrousel>
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        picture={logement.cover}
                        title={logement.title}
                    />))}
            </Carrousel>
        </div>
    )
}

export default Home
//Import React
import React from 'react'
//Import all our components
import logements from '../datas/logements.json'
import Card from '../components/Card/index'
import Banner from '../components/Banner/index'
import Carrousel from '../components/Carrousel'
//Import our style for this page
import '../styles/Home.css'
//Import our banner's image
import Mountain from '../assets/mountain.png'

/**
 * our Homepage with all components called
 * @returns 
 */
function Home() {
    return (
        <div className='home'>
            <Banner
                key={'Banner1'}
                image={Mountain}
                alt={'Falaises'}
                title={'Chez vous, partout et ailleurs'}
                cat={'home'}
            />
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
//Import React
import React from 'react'
//Import all our components
import Rating from '../components/Rating'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Slide from '../components/Slide'
//Import our style for this page
import '../styles/Logement.css'
//Import components from React Router v6
import { useParams, Navigate } from 'react-router-dom'
//Import our datas
import logements from '../datas/logements.json'


/**
 * Our Location page with all components displayed on
 * @returns 
 */
function Logement() {
    const params = useParams();
    const id = params.id;
    const logement = logements.find((e) => e.id === id);

    if (logement !== undefined) {
        const tags = logement.tags;
        return (
            <div className='logement'>
                <Slide
                    pictures={logement.pictures}
                />
                <div className='logement__header'>
                    <div className='logement__leftpart'>
                        <h1 className='logement__title'>{logement.title}</h1>
                        <h2 className='logement__location'>{logement.location}</h2>

                        <div className='tag'>
                            {tags.map(tag =>
                                <Tag 
                                    key={tag}
                                    tag={tag}
                                />)
                            }
                        </div>
                    </div>
                    <div className='logement__rightpart'>
                        <div className='logement__people'>
                            <div className='logement__people__name'>{logement.host.name}</div>
                            <img src={logement.host.picture} alt="avatar de l'host" className='logement__people__pic' />
                        </div>
                        <div className='logement__rating'>
                            <Rating 
                                score={logement.rating}
                            />
                        </div>
                    </div>
                </div>
                
                <div className='collapses'>
                    <Collapse
                        title={'Description'}
                        size={'45'}
                        infos={logement.description}
                    />
                    <Collapse
                        title={'Équipement'}
                        size={'45'}
                        infos={logement.equipments}
                    />
                </div>
                
                
            </div>
        );
    } else {
        return <Navigate to="/error" replace={true} />;
    }

    
}

export default Logement
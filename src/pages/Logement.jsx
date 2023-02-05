import React from 'react'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Slide from '../components/Slide'
import '../styles/Logement.css'
import { useParams, /* useNavigate */ } from 'react-router-dom'
import logements from '../datas/logements.json'
import Error from '../components/Error'
import Rating from '../components/Rating'

function Logement() {
    const params = useParams();
    const id = params.id;
    const logement = logements.find((e) => e.id === id);
    const tags = logement.tags;

    //const navigate = useNavigate()

    if (logement !== undefined) {
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
        return <Error />;
    }

    
}

export default Logement
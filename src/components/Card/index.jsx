import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../styles/Card.css'
 
function Card({ id, title, picture }) {
    return (
        <div className='card'>
            <Link to={'/logement/'+ id} className='card__link'>
                <img src={picture} alt="Illustration du logement" className='card__img'/>
                <span className='card__shadow'></span>
                <span className='card__title'>
                    {title}
                </span>
            </Link>
        </div>
    )
}
 
Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}
 
export default Card
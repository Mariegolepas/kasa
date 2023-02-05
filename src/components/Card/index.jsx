//Import Link Component from React Router Dom v6
import { Link } from 'react-router-dom'

//Import our style for this page
import '../../styles/Card.css'

/**
 * Card components for display our places on homepage
 * @param {*} id our place's id to open the place's own page
 * @param {*} title our place's name to display
 * @param {*} picture our place's cover 
 * @returns Card Components with 3 props needed on the function
 */
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
 
export default Card
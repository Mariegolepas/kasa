//Import Link component from React Router v6
import { Link } from 'react-router-dom'
//Import our style for this page
import '../../styles/Error.css'

/**
 * Error Component, for our 404's error page
 * @returns our Component
 */
function Error() {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <h2 className='error__description'>Oups! La page que vous demandez n'existe pas.</h2>

            <Link to="/" className='error__link'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error
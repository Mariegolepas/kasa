import { Link } from 'react-router-dom'
import '../../styles/Error.css'

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
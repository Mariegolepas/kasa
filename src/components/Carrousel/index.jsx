//Import our style for this page
import '../../styles/Carrousel.css'

/**
 * Container Component which will be have our cards has children on homepage.
 * Component which can be reuse later
 * @param {*} children because can have many things inside 
 * @returns our component
 */
function Carrousel({children}) {
    return (
        <main className='carrousel'>
            {children}
        </main>
    );
}

export default Carrousel;
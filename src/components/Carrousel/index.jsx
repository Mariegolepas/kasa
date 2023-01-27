import '../../styles/Carrousel.css'

function Carrousel({children}) {
    return (
        <div className='carrousel'>
            {children}
        </div>
    );
}

export default Carrousel;
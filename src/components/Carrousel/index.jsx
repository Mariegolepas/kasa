import '../../styles/Carrousel.css'

function Carrousel({children}) {
    return (
        <main className='carrousel'>
            {children}
        </main>
    );
}

export default Carrousel;
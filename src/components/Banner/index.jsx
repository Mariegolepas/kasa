import '../../styles/Banner.css'
import PropTypes from 'prop-types'

Banner.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string,
}

function Banner({image, title, alt}) {
    return (
        <div className='banner'>
            <img src={image} alt={alt} className='banner__image' />
            <h1 className='banner__title'>
                {title}
            </h1>
        </div>
    );
}

/* function Banner({children}) {
    return (
        <div className='banner'>
            {children}
        </div>
    );
} */

export default Banner;
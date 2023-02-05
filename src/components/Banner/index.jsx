//Import our style for this page
import '../../styles/Banner.css'

/**
 * Banner Component which will be used on homepage and about page
 * @param {*} image for banner's cover
 * @param {*} title for page's title
 * @param {*} alt for image's alt
 * @returns our components with 3 props needed
 */
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

export default Banner;
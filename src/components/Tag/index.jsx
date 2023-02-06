//Import our style for this page
import '../../styles/Tag.css'

/**
 * Our Tag components
 * @param {*} tag our tag information to display
 * @returns our component
 */
function Tag({tag}) {
    return (
            <div className="tag__div">
                <p className="tag__text">{tag}</p>
            </div>
    )
}
 
export default Tag
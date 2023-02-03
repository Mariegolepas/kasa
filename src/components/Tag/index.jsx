import '../../styles/Tag.css'

function Tag({tag}) {
    return (
            <div className="tag__div">
                <p className="tag__text">{tag}</p>
            </div>
    )
}
 
export default Tag
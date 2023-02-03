import '../../styles/Tag.css'

function Tag({tag}) {
    return (
        <div>
            <div className="tag__div">
                <p className="tag__text">{tag}</p>
            </div>
        </div>
    )
}
 
export default Tag
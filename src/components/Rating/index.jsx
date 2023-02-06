//Import React
import React from 'react'
//Import our style for this page
import '../../styles/Rating.css'
//Import our stars
import GreyStar from '../../assets/grey_star.svg'
import ColoredStar from '../../assets/color_star.svg'

/**
 * Our Rating component to display our stars
 * @param {*} score rating on our db
 * @returns our component with starts mapped
 */
function Rating({score}) {
    const stars = [];
    const rate = parseInt(score);
    
    //add star color on our array depending on rate
    for(let s = 0; s < 5; s++){
        if (s < rate) {
            stars.push(ColoredStar)
        } else {
            stars.push(GreyStar)
        }
    }

    const starList = stars.map((star, index) =>
        <img src={star} key={index} alt="étoile" />
    )

    return (
        <div className="rating">
            {starList}
        </div>
    )
}

export default Rating
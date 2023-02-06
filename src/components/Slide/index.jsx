//Import our style for this page
import '../../styles/Slide.css'
//Import React
import React from 'react';
//Import our Arraw
import ArrawLeft from '../../assets/arraw-left.svg'
import ArrawRight from '../../assets/arraw-right.svg'
//Import useState & useEffect from React
import { useState, useEffect } from 'react';

/**
 * our Sliding components
 * @param {*} pictures to display our pictures array
 * @returns our component with image slider
 */
function Slide({pictures}) {
    const [count, setCount] = useState(0);
    const nbImages = pictures.length;

    useEffect(() => {
        if (nbImages < count+1) {
            setCount(0)
        } else if (count < 0) {
            setCount(nbImages - 1)
        }
    }, [count, nbImages])
    
    return (
        <section className='slide'>
            <img src={pictures[count]} alt="Illustration du logement" className='slide__img'/>
                {nbImages <= 1 ? <></> :
                    <>
                    <span className='slide__index'>
                        {count+1}/{nbImages}
                    </span>
                    <button onClick={() => setCount(count-1)} className='slide__arraw left'>
                        <img src={ArrawLeft} alt="arraw left"/>
                    </button>
                    <button onClick={() => setCount(count+1)} className='slide__arraw right'>
                        <img src={ArrawRight} alt="arraw right"/>
                    </button></>}
        </section>
    );
}

export default Slide;
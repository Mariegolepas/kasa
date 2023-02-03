import '../../styles/Slide.css'
import React from 'react';
import ArrawLeft from '../../assets/arraw-left.svg'
import ArrawRight from '../../assets/arraw-right.svg'
import { useState } from 'react';
import { useEffect } from 'react';

function Slide({pictures}) {
    const [count, setCount] = useState(0);
    const nbImages = pictures.length;

    useEffect(() => {
        if (nbImages <= count+1) {
            setCount(0)
        } /* else if (nbImages <= 0) {
            setCount(nbImages - 1)
        } */ else if (count < 0) {
            setCount(nbImages - 1)
        } /* else if (count === nbImages) {
            setCount(0)
        } */
    }, [count, nbImages])
    
    return (
        <section className='slide'>
            <img src={pictures[count]} alt="Illustration du logement" className='slide__img'/>
            {nbImages <= 1 ? <span></span> : <span className='slide__index'>
                {count+1}/{nbImages}</span>}
                {nbImages <= 1 ? <button className='slide__arraw left'></button> : <button onClick={() => setCount(count-1)} className='slide__arraw left'>
                <img src={ArrawLeft} alt="arraw left"/>
            </button>}
            {nbImages <= 1 ? <button className='slide__arraw right'></button> : <button onClick={() => setCount(count+1)} className='slide__arraw right'>
                <img src={ArrawRight} alt="arraw right"/>
            </button>}
        </section>
    );
}

export default Slide;
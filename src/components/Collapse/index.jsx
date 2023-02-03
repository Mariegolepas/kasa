import '../../styles/Collapse.css'
import ArrawDown from '../../assets/arraw-down.svg'
import { useState } from 'react';
import ArrawUp from '../../assets/arraw-up.svg'

function Collapse({title, size, infos}) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={'collaspe size'+size}>
            <div className={'collapse__close close'+size} onClick={toggleOpen}>
                <p className='collapse__title'>
                    {title}
                </p>
                <span className='collapse__arrawdown'>
                    <img src={open ? ArrawUp : ArrawDown} alt='arraw down' className='collapse__arrawdown__img' />
                </span>
            </div>

            <div className={open ? 'collapse__open' : 'collapse__invisible'} >
                <div className='collapse__open__txt'>
                {Array.isArray(infos) ? infos.map((info) =>
                    <li className='collapse__open__txt__info' key='info'>
                        {info}
                    </li>) :
                    <p>
                        {infos}
                    </p>
                }
                </div>
            </div>
        </div>
    );
}

export default Collapse
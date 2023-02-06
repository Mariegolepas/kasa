//Import our style for this page
import '../../styles/Collapse.css'
//Import useState from React to toggle open
import { useState } from 'react';
//Import our two arraws
import ArrawDown from '../../assets/arraw-down.svg'
import ArrawUp from '../../assets/arraw-up.svg'


/**
 * Collapse component which will be used on about page and on location's place
 * @param {*} title for the name displayed on the collapse while close
 * @param {*} size permit to modulate our component for both use, with a specific class
 * @param {*} infos set our information to display while open
 * @returns 
 */
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
                    <li className={'collapse__open__txt__info infos'+size} key={info} >
                        {info}
                    </li>) :
                    <p className={'infos'+size}>
                        {infos}
                    </p>
                }
                </div>
            </div>
        </div>
    );
}

export default Collapse
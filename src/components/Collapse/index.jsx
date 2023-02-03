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

            <div className={open ? 'collapse__open size'+size : 'collapse__invisible'} >
                <span className='collapse__open__txt'>
                    {infos}
                </span>
            </div>
        </div>
    );
}

export default Collapse
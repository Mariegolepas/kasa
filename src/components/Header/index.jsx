import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/logo.svg'
 
function Header() {
    return (
        <header className='header'>
            {/* <nav className='header__navbar'> */}
            <img src={logo} alt='Logo Kasa' className='header__logo'/>
            <nav className='header__navbar'>
                <ul className='header__navbar__list'>
                    <li className='header__navbar__list__bloc'><NavLink to="/" className={({isActive}) => isActive ? 'header__navbar__list__bloc--active' : undefined} end>Accueil</NavLink></li>
                    <li className='header__navbar__list__bloc'><NavLink to="/about" className={({isActive}) => isActive ? 'header__navbar__list__bloc--active' : undefined}>A Propos</NavLink></li>
                </ul> 
            </nav>
        </header>
    )
}

export default Header
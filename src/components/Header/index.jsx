//Import NavLink from React Router v6 - permit to recognize while our page is active
import { NavLink } from 'react-router-dom'
//Import our style for this page
import '../../styles/Header.css'
//Import our logo
import logo from '../../assets/logo.svg'
 
/**
 * Our Header component, which include our Navbar
 * @returns our component
 */
function Header() {
    return (
        <header className='header'>
            <NavLink to="/"><img src={logo} alt='Logo Kasa' className='header__logo'/></NavLink>
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
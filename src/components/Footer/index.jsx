import '../../styles/Footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
	return (
		<footer className='footer'>
            <img src={logo} alt='Logo Kasa' className='footer__logo'/>
			<p className='footer__text'>
                © 2020 Kasa. All rights reserved
			</p>
		</footer>
	)
}

export default Footer
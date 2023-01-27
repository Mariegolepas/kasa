import '../../styles/Footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
	return (
		<footer className='footer'>
            <img src={logo} alt='Logo Kasa' className='footer__logo'/>
			<div className='footer__div'>
                © 2020 Kasa. All rights reserved
			</div>
		</footer>
	)
}

export default Footer
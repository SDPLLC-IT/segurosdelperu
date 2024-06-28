import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img className="nav__logo" src={logo} alt="SDP Logo" width="90" height="90"/>
                <ul className="nav__items">
                    <li className="nav__item"><Link className='nav__link' to="/inicio">Inicio</Link></li>
                    <li className="nav__item"><Link className='nav__link' to="/nosotros">Nosotros</Link></li>
                    <li className="nav__item"><Link className='nav__link' to="/cotiza">Cotiza SCTR</Link></li>
                    <li className="nav__item"><Link className='nav__link' to="/contacto">Contacto</Link></li>
                    <li className="nav__item"><Link className='nav__link' to="/afiliados">Programa de Afiliados</Link></li>
                    <li className="nav__item"><Link className='nav__link' to="/validar-certificado">Validar certificado</Link></li>
                </ul>
            </nav>
        </header>
    );
}
import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoE from '../../assets/images/E-logo.png';
import LogoSubtitle from '../../assets/images/elvin_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoE} alt='S-logo'/>
                <img className="sub-logo" src={LogoSubtitle} alt='E-logo-sub'/>
            </Link>
            <nav>
                <NavLink 
                    exact="true" 
                    activeclassname="active"
                    to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active"
                    className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active"
                    className="contact-link" 
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/elvinardy-darwin/">
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://github.com/Elvinardy">
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.youtube.com/@ElvinardyDarwin">
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
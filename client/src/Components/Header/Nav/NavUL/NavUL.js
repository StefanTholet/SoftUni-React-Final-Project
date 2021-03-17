import './NavUL.css';
import { NavLink } from 'react-router-dom';
const NavUL = () => {
    return (
        <ul>
            <li>
                <NavLink to="/book" exact activeClassName="active">BOOK NOW</NavLink>
            </li>
            <li>
                <NavLink to="/services" activeClassName="active">Amenities</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    );
}

export default NavUL;
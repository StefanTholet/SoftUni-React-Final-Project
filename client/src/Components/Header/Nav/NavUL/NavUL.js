import './NavUL.css';
import { NavLink } from 'react-router-dom';
const NavUL = () => {
    return (
        <ul>
            <li>
                <NavLink to="/book" exact activeClassName="active">BOOK NOW</NavLink>
            </li>
            <li>
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/create-blog" activeClassName="active">Add Blog Post</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    );
}

export default NavUL;
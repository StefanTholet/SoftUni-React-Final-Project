import './HotelName.css';
import { NavLink, Link } from 'react-router-dom'
const HotelName = () => {
    return (
        <div className="nav-row">
            <h1>
                <Link className="hotel-title" exact="true" to="/">Hotel Horizont</Link>
            </h1>
        </div>
    );
}

export default HotelName;
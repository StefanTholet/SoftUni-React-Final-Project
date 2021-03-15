import './Header.css';
import './HotelName/HotelName';
import HotelName from './HotelName/HotelName';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <header className="header-nav">
		<div className="nav-container">
            <HotelName />
			<Nav></Nav>
		</div>
	</header>
    )
}

export default Header;
import './Header.css';
import './HotelName/HotelName';
import HotelName from './HotelName/HotelName';
import Nav from './Nav/Nav'
const Header = () => {
    console.log(HotelName)
    return (
        <header className="header-nav">
		<div class="nav-container">
            <HotelName />
			<Nav></Nav>
		</div>
	</header>
    )
}

export default Header;
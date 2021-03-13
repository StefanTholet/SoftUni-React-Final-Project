import React from 'react';
import origamiBirdFlipped from '../public/white-origami-bird.png'
function Navigation(props) {
    
    return (
        <nav className="Navigation" >
            <ul>
                <img src={origamiBirdFlipped} alt="" srcset=""/>
                <li className="listItem"><a href="#"></a>Going to 1</li>
                <li className="listItem"><a href="#"></a>Going to 2</li>
                <li className="listItem"><a href="#"></a>Going to 3</li>
                <li className="listItem"><a href="#"></a>Going to 4</li>
                <li className="listItem"><a href="#"></a>Going to 5</li>
                <li className="listItem"><a href="#"></a>Going to 6</li>
                <li className="listItem"><a href="#"></a>Going to 7</li>
                <li className="listItem"><a href="#"></a>Going to 8</li>
                <li className="listItem"><a href="#"></a>Going to 9</li>
                <li className="listItem"><a href="#"></a>Going to 10</li>
                <li className="listItem"><a href="#"></a>Going to 11</li>      
            </ul>
        </nav>
    )
}

export default Navigation;
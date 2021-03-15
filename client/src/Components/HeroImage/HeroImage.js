// import './HeroImage.css';
import imageList from './imageList';
import { css } from './HeroImage.css';
import { useState, useEffect } from 'react';
const HeroImage = () => {

    let [backgroundImageSettings, setImage] = useState({ count: 0, currentImage: imageList[0] });

    useEffect(() => {
        let { count, currentImage } = backgroundImageSettings;
        setTimeout(() => {
            if (count === imageList.length - 1) {
                count = 0;
            }
            setImage({
                count: count + 1,
                currentImage: imageList[count]
            })
        }, 5000)
    });
    return (
        <div className="HeroImage-container" style={{
            backgroundImage: `url(${backgroundImageSettings.currentImage})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundColor: '#fff',
            width: '100%',
            height: '1019px',
            transition: 'background-image 1s ease-in-out'
        }}
        >

        </div>
    );
}

export default HeroImage
// import './HeroImage.css';

import styles from './HeroImage.module.css';

const HeroImage = (props) => {
    return (
        <div className={styles['HeroImage-Container']} style={{backgroundImage: `url(${props.image})`}}> 
                {props.children}
        </div>
    );
}

export default HeroImage
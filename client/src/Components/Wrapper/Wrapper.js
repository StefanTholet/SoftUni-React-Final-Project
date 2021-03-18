/* style={{backgroundImage: `url(${props.image})`}} */
import { Route, withRouter, useHistory } from 'react-router-dom';
import locationBackground from './locations';

import style from './Wrapper.module.css'
const Wrapper = (props) => {
    console.log(props)
    const path = props.history.location.pathname;
    console.log(locationBackground)
    return (
        <div className={style["site-wrapper"]} style={{ backgroundImage: `url(${locationBackground[path]})` }}>
            {props.children}
        </div>
    );
}

export default withRouter(Wrapper);
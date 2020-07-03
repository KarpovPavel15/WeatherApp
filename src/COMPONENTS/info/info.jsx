import './info.scss';
import React, { useState } from "react";
import settings from '../../images/settings.png'
import { Settings } from '../settings';

const Info = () => {
    const [state, setState] = useState(false);
    const toggleMenu = () => setState(!state);
    return (
        <div className="info">
            <p>Weather</p>
            <img src={settings} className="info__settings" alt="settings" onClick={toggleMenu}/>
            <Settings isOpen={state} setMenu={toggleMenu}/>
        </div>
    )
};
export default Info;

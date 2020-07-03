import './settings.scss';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'

export const Settings = ({isOpen, setMenu}) => {

    const [state, setState] = useState({
        valueLover: '',
        valueUpper: '',
        valueOldLover: '',
        valueOldUpper: '',
    });

    const getLoverTemp = (e) => {
        let next = state;
        next.valueLover = e.target.value;
        next.changed = next.valueLover !== next.valueOldLover;
        setState(next);
    };
    const getUpperTemp = (e) => {
        let next = state;
        next.valueUpper = e.target.value;
        next.changed = next.valueUpper !== next.valueOldUpper;
        setState(next);
    };

    const checkTemp = () => {
        return (
            setMenu() &&
            console.log(state.valueLover)
        )
    };
    return (
        <Menu isOpen={isOpen}>
            <div>
                <div className="menu__area">
                    <p>Lover temp:</p>
                    <input type="number" min="10" max="80" onChange={(event)=>getLoverTemp(event)} className="menu__lover-temp"/>
                </div>
                <div className="menu__area">
                    <p>Upper temp:</p>
                    <input type="number" min="10" max="80" onChange={(event)=>getUpperTemp(event)} className="menu__upper-temp"/>
                </div>
                <button onClick={checkTemp}>Check</button>
            </div>
        </Menu>
    )
};

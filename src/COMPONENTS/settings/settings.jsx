import './settings.scss';
import React from 'react';
import { slide as Menu } from 'react-burger-menu'

export const Settings = ({isOpen}) => {
    return (
        <Menu isOpen={isOpen}>
            <div>
                <div className="menu__area">
                    <p>Lover temp:</p>
                    <input className="menu__lover-temp"/>
                </div>
                <div className="menu__area">
                    <p>Upper temp:</p>
                    <input className="menu__upper-temp"/>
                </div>
                <button>Check</button>
            </div>
        </Menu>
    )
};

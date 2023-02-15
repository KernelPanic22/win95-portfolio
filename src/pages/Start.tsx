import React, { PropsWithChildren, useState } from 'react';
import win95 from '../assets/win95.png';
import './css/Start.css';
import StartMenu from './StartMenu';

interface ComponentType {
    component: {
        visible: boolean;
        setStartMenu: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

function Start({ component }: PropsWithChildren<ComponentType>) {
    
    const openStartMenu = () => {
        console.log('openStartMenu');
        console.log(component.visible);
        component.setStartMenu(!component.visible);
    };
  
    return (
        <div className='menu-container'>
            <div className="start-menu">
                <div className="container-border" onClick={openStartMenu}>
                    <img src={win95} alt='win-logo' />
                    <div className="start-menu-text">
                        <span>Start</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Start;
import React, { useState, useEffect, Component, PropsWithChildren, SetStateAction, FC, createContext } from 'react';
import Bio from '../assets/win95Icons/bio.png';
import Apple from '../assets/win95Icons/apple.png';
import './css/Shortcuts.css';
import ReactDOM from 'react-dom';
import Window from './Window';
import ProgramTaskBar from './ProgramTaskBar';
import Biography from './windows/Biography';

type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
};

interface ComponentProps {
    component: {
        programs: ComponentType[];
        setPrograms: React.Dispatch<SetStateAction<ComponentType[]>>;
    };
}


function ShortCuts({ component }: PropsWithChildren<ComponentProps>) {
    
    const open = (id: string, icon: string, name: string) => {
        const program = {
            id: id,
            icon: icon,
            name: name,
            minimized: false
        }
        console.log("hi");
        component.setPrograms((oldPrograms) => [...oldPrograms, program]);
    }

    return (
        <nav className="grid-container">
            <li className='program-container'>
                <button className="icon" onClick={() => open('Biography', Bio, 'Biography')}>
                    <img src={Bio} alt="bio" className='program-logo' />
                    <div className='border'>
                        <p className='icon-text'>Bio</p>
                    </div>
                </button>
            </li>
            <li className='program-container'>
                <button className="icon">
                    <img src={Apple} alt="apple" className='program-logo' />
                    <div className='border'>
                        <p className='icon-text'>Bio</p>
                    </div>
                </button>
            </li>
        </nav>
    );
}

export default ShortCuts;

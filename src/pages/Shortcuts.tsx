import React, { useState, useEffect, Component, PropsWithChildren, SetStateAction, FC, createContext } from 'react';
import Bio from '../assets/win95Icons/bio.png';
import GithubLogo from '../assets/Icons/git.png'
import ResumeIcon from '../assets/Icons/userCard.png'
import './css/Shortcuts.css';


type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
    active: boolean;
};

interface ComponentProps {
    component: {        
        programs: ComponentType[],
        setPrograms: React.Dispatch<SetStateAction<ComponentType[]>>;
    }
}


function ShortCuts({ component }: PropsWithChildren<ComponentProps>) {
    
    const open = (id: string, icon: string, name: string) => {
        if (!component.programs.find((program) => program.id === id)) {
            const program = {
                id: id,
                icon: icon,
                name: name,
                minimized: false,
                active: true
            };
            component.setPrograms((oldPrograms) => [...oldPrograms, program]);
        }
    }

    return (
        <nav className="grid-container">
            <li className='program-container'>
                <button className="icon" onClick={() => open('Biography', Bio, 'Biography')}>
                    <img src={Bio} alt="bio" className='program-logo' />
                    <div className='border'>
                        <p className='icon-text'>Biography</p>
                    </div>
                </button>
            </li>
            <li className='program-container'>
                <button className="icon" onClick={() => open('Github',GithubLogo,'Github')}>
                    <img src={GithubLogo} alt="apple" className='program-logo' />
                    <div className='border'>
                        <p className='icon-text'>Github</p>
                    </div>
                </button>
            </li>
            <li className='program-container'>
                <button className="icon" onClick={() => open('Resume',ResumeIcon,'Resume')}>
                    <img src={ResumeIcon} alt="apple" className='program-logo' />
                    <div className='border'>
                        <p className='icon-text'>Resume</p>
                    </div>
                </button>
            </li>
        </nav>
    );
}

export default ShortCuts;

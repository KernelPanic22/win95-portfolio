import React, { useState, useEffect, Component } from 'react';
import Bio from '../assets/win95Icons/bio.png';
import Apple from '../assets/win95Icons/apple.png';
import './css/Desktop.css';
import ReactDOM from 'react-dom';
import Window from './Window';
import ProgramTaskBar from './ProgramTaskBar';
function Desktop() {
    const open = (id: string, icon :string, name:string) => {
        const windowContainer = document.getElementById('container-windows');
        const taskBar = document.getElementById('task-bar');
        if (!windowContainer?.contains(document.getElementById(`container-${id}`))) {
            //append a new window to element
            ReactDOM.render(<Window component={id}></Window>, windowContainer);
            const div = document.createElement('div');
            div.id = `taskbar-${id}`;
            taskBar?.appendChild(div);
            ReactDOM.render(<ProgramTaskBar component={{ id: id, icon: icon, name: name }}></ProgramTaskBar>, document.getElementById(`taskbar-${id}`));
            
        } else {
            //remove the window from element
            document.getElementById(`container-${id}`)?.classList.remove('hidden');
            taskBar?.getElementsByClassName('navbar-item-depressed')[0].classList.replace('navbar-item-depressed', 'navbar-item open');
        }
    }

    return (
        <nav className="grid-container">
            <li className='program-container'>
                <button className="icon" onClick={() => open('Biography',Bio,'Biography')}>
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

export default Desktop;

import './css/TaskBar.css';
import win95 from '../assets/win95.png';
import React, {PropsWithChildren} from 'react';

type ComponentType = {
    id: string;
    icon: string;
    name: string;
};

interface ComponentProps {
    component: ComponentType[];
}


function TaskBar({ component }: PropsWithChildren<ComponentProps>) {
    return (
        //navbar from ./css/TaskBar.css
        <div className='wrapper'>
            <div className='bar-container' id='task-bar'>
                <div className="start-menu">
                    <div className="container-border">
                        <img src={win95} alt='win-logo' />
                        <div className="start-menu-text">
                            <span>Start</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TaskBar;

import './css/TaskBar.css';
import win95 from '../assets/win95.png';
import React, { PropsWithChildren } from 'react';
import ProgramTaskBar from './ProgramTaskBar';
import ProgramsTaskBarFactory from './ProgramsTaskBarFactory';

type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
};

interface ComponentProps {
    component: {
        programs: ComponentType[];
        setPrograms: React.Dispatch<React.SetStateAction<ComponentType[]>>;
    };
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
                <ProgramsTaskBarFactory component={component}></ProgramsTaskBarFactory>
            </div>
        </div>
    );
}

export default TaskBar;

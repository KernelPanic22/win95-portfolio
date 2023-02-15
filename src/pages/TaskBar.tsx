import './css/TaskBar.css';
import React, { PropsWithChildren } from 'react';
import ProgramsTaskBarFactory from './ProgramsTaskBarFactory';
import Start from './Start';

type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
    active: boolean;
};

interface ComponentProps {
    component: {
        programs: ComponentType[];
        setPrograms: React.Dispatch<React.SetStateAction<ComponentType[]>>;
        visible: boolean;
        setStartMenu: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

function TaskBar({ component }: PropsWithChildren<ComponentProps>) {
        return (
            //navbar from ./css/TaskBar.css
            <div className='wrapper'>
                <div className='bar-container' id='task-bar'>
                    <Start component={{
                        visible: component.visible,
                        setStartMenu: component.setStartMenu
                    }}></Start>
                    <ProgramsTaskBarFactory component={component}></ProgramsTaskBarFactory>
                </div>
            </div>
        );
    }

    export default TaskBar;

import PropTypes, { InferProps } from 'prop-types';
import React, { useState, FunctionComponent, PropsWithChildren } from 'react';
import './css/ProgramTaskBar.css';

type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
    active: boolean;
};

interface ComponentProps {
    component: {
        program: ComponentType,
        setPrograms: React.Dispatch<React.SetStateAction<ComponentType[]>>;
    };
}

function ProgramTaskBar({ component }: PropsWithChildren<ComponentProps>) {
    const openWindow = (id: string) => {
        component.setPrograms(([...oldPrograms]) => {
            const newPrograms = oldPrograms.map((program) => {
                if (program.id === id) {
                    program.minimized = false;
                    program.active = true;
                } else {
                    program.active = false;
                }
                return program;
            });
            return newPrograms;
        });
    }



    const getClassName = () => {
        if(component.program.active && !component.program.minimized){
            return 'navbar-item-depressed';
        }else{
            return 'navbar-item open';
        }
    }

    return (
        <button id={`button-taskbar-${component.program.id}`}
            className={getClassName()}
            onClick={() => { openWindow(component.program.id) }}>
            <img className="icon-image" src={component.program.icon} />
            <p>{component.program.name}</p>
        </button>
    );
}

export default ProgramTaskBar;
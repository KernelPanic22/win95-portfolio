import React, { Component, PropsWithChildren, SetStateAction, useState } from 'react';
import Window from './Window';
type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
};

interface ComponentProps {
    component: {        
        programs: ComponentType[],
        setPrograms: React.Dispatch<SetStateAction<ComponentType[]>>;
    }
}

function Desktop({ component }: PropsWithChildren<ComponentProps>) {
    



    return (
        <div id='container-windows'>
            {component.programs.map((program) => {
                return (
                    <div className='window-container'>
                        <Window component={{ programs: component.programs, program: program, setPrograms: component.setPrograms }} />
                    </div>
                );
            })}

        </div>
    );
}

export default Desktop;
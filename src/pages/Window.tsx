import React, { useState, useEffect, Component, PropsWithChildren, SetStateAction } from 'react';
import Draggable, { DraggableCore } from "react-draggable";
import iconImage from '../assets/win95Icons/bio.png';
import './css/Window.css';
import Biography from './windows/Biography';
import PropTypes, { InferProps } from 'prop-types';
import ReactDOM from 'react-dom';
import { JsxElement } from 'typescript';
import ProgramTaskBar from './ProgramTaskBar';
import Github from './windows/Github';

type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
};

interface ComponentProps {
    component: {
        programs: ComponentType[],
        program: ComponentType,
        setPrograms: React.Dispatch<SetStateAction<ComponentType[]>>;
    }
}

function Window({ component }: PropsWithChildren<ComponentProps>) {
    const [minimized, setMinimized] = useState(false);
    const [maximized, setMaximized] = useState(false);

    //map of components for example: {Biography: <Biography />}
    const implementations = new Map<string, JSX.Element>();
    implementations.set('Biography', <Biography />);
    implementations.set('Github', <Github/>);



    const getComponentToRender = (component: string) => {
        return implementations.get(component);
    }

    const getClassName = () => {
        if (component.program.minimized) {
            return 'window style hidden';
        }
        if (maximized) {
            return 'window style maximized';
        }
        return 'window style';
    }


    const minimize = () => {
        component.setPrograms(([...oldPrograms]) => {
            const newPrograms = oldPrograms.map((program) => {
                if (program.id === component.program.id) {
                    program.minimized = true;
                }
                return program;
            });
            return newPrograms;
        });
    };

    const close = () => {
        component.setPrograms((oldPrograms) => {
            const newPrograms = oldPrograms.filter((program) => {
                return program.id !== component.program.id;
            });
            return newPrograms;
        });
    };

    return (
        <Draggable>
            <div className={getClassName()} id={`container-${component}`}>
                <div className="top-bar" id="top-bar">
                    <div className='top-div'>
                        <img className="icon-image" src={iconImage} />Biography</div>
                    <div className="triple-button">
                        <div className="button-hide" onClick={minimize}>
                            <span className='hide-span'></span>
                        </div>
                        <div className="button-expand" >
                            <span className='expand-span'></span></div>
                        <div className="button-close" onClick={close}>×</div>
                    </div>
                </div>
                <div className="content">
                    <slot className="window-content" name="content">
                        {getComponentToRender(component.program.name)}
                    </slot>
                </div>
            </div>
        </Draggable>
    );
}

export default Window;

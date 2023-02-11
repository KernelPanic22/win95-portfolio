import React, { useState, useEffect, Component } from 'react';
import Draggable, { DraggableCore } from "react-draggable";
import iconImage from '../assets/win95Icons/bio.png';
import './css/Window.css';
import Biography from './windows/Biography';
import PropTypes, { InferProps } from 'prop-types';
import { ReactDOM } from 'react';

Window.propTypes = {
    component: PropTypes.string.isRequired
};

function Window({ component }: InferProps<typeof Window.propTypes>) {
    const [isOpen, setIsOpen] = useState(true);
    const getClassName = () => {
        return isOpen ? 'window window-style' : 'window window-style hidden';
    }
    const close = () => {
        document.getElementById(`container-${component}`)?.classList.add('hidden');
        document.getElementById(`button-taskbar-${component}`)?.classList.remove('navbar-item-depressed');
        document.getElementById(`button-taskbar-${component}`)?.classList.add('navbar-item','open');
        console.log(document.getElementById(`button-taskbar-${component}`));
    }


    const indexComponent = new Map<string, JSX.Element>([
        ['Biography', <Biography></Biography>]
    ]);

    const getComponent = (component: string) => {
        return indexComponent.get(component);
    }

    return (
        <Draggable>
            <div className={getClassName()} id={`container-${component}`}>
                <div className="top-bar" id="top-bar">
                    <div className='top-div'>
                        <img className="icon-image" src={iconImage} />Biography</div>
                    <div className="triple-button">
                        <div className="button-hide" onClick={close}>
                            <span className='hide-span'></span>
                        </div>
                        <div className="button-expand" >
                            <span className='expand-span'></span></div>
                        <div className="button-close">×</div>
                    </div>
                </div>
                <div className="content">
                    <slot className="window-content" name="content">
                        {getComponent(component)}
                    </slot>
                </div>
            </div>
        </Draggable>
    );
}

export default Window;

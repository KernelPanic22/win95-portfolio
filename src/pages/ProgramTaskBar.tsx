import PropTypes, { InferProps } from 'prop-types';
import React, { useState, FunctionComponent, PropsWithChildren } from 'react';
import './css/ProgramTaskBar.css';

type ComponentType = {
    id: string;
    icon: string;
    name: string;
};

interface ComponentProps {
    component: ComponentType;
}

function ProgramTaskBar({ component }: PropsWithChildren<ComponentProps>) {

    const [isOpen, setIsOpen] = useState(true);

    const openWindow = (id: string) => {
        const windowContainer = document.getElementById('container-windows');
        if (windowContainer?.contains(document.getElementById(`container-${id}`))) {
            document.getElementById(`container-${id}`)?.classList.remove('hidden');
            document.getElementById(`button-taskbar-${id}`)?.classList.remove('navbar-item');
            document.getElementById(`button-taskbar-${id}`)?.classList.remove('open');
            document.getElementById(`button-taskbar-${id}`)?.classList.add('navbar-item-depressed');
        }
    }

    const windowIsOpen = (id: string) => {
        return document.getElementById(`container-${id}`)?.classList.contains('hidden');
    }

    const getClassName = () => {
        if (windowIsOpen(component.id)) {
            return 'navbar-item open';
        } else {
            return 'navbar-item-depressed';
        }
    }

    return (
        <button id={`button-taskbar-${component.id}`}
            className={getClassName()}
            onClick={() => { openWindow(component.id) }}>
            <img className="icon-image" src={component.icon} />
            <p>{component.name}</p>
        </button>
    );
}

export default ProgramTaskBar;
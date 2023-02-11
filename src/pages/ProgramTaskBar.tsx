import PropTypes, { InferProps } from 'prop-types';
import React, { useState, useEffect, Component, ReactDOM } from 'react';
import './css/ProgramTaskBar.css';

ProgramTaskBar.propTypes = {
    component: PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};

function ProgramTaskBar(componentProperties: InferProps<typeof ProgramTaskBar.propTypes>) {

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
        if (windowIsOpen(componentProperties.component.id)) {
            return 'navbar-item open';
        } else {
            return 'navbar-item-depressed';
        }
    }

    return (
        <button id={`button-taskbar-${componentProperties.component.id}`}
            className={getClassName()}
            onClick={() => { openWindow(componentProperties.component.id) }}>
            <img className="icon-image" src={componentProperties.component.icon} />
            <p>{componentProperties.component.name}</p>
        </button>
    );
}

export default ProgramTaskBar;
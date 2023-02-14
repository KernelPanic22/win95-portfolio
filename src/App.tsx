import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from './pages/TaskBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shortcuts from './pages/Shortcuts';
import lain from './assets/STORM5.gif'
import loveLain from './assets/LainLove.gif'
import Window from './pages/Window';
import Biography from './pages/windows/Biography';
import ProgramTaskBar from './pages/ProgramTaskBar';
import Desktop from './pages/Desktop';
import { InferProps } from 'prop-types';


function App() {

  type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
    active: boolean;
  };

  interface ComponentProps {
    component: ComponentType[];
  }

  const [programs, setPrograms] = useState(new Array<ComponentType>());

  return (
    <div className="screen" id='app'>
      <div className="background">
        <div className="desktop-icons">
          <Shortcuts component={{
            programs: programs,
            setPrograms: setPrograms
          }}></Shortcuts>
        </div>
        <div id='container-windows'>
          <Desktop component={{
            programs: programs,
            setPrograms: setPrograms
          }}></Desktop>
        </div>

        <img className="lain" src={lain} alt="imagine lain" />
      </div>

      <TaskBar component={{
        programs: programs,
        setPrograms: setPrograms
      }} />

    </div>
  );
}

export default App;

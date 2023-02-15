import React, { useState } from 'react';
import './App.css';
import TaskBar from './pages/TaskBar';
import Shortcuts from './pages/Shortcuts';
import lain from './assets/STORM5.gif'
import Desktop from './pages/Desktop';
import StartMenu from './pages/StartMenu';

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

function App() {
  const [programs, setPrograms] = useState(new Array<ComponentType>());
  const [startMenu, setStartMenu] = useState<boolean>(false);

  return (
    <>
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
        {startMenu ? <StartMenu component={{
          visible: startMenu,
          setStartMenu: setStartMenu
        }}></StartMenu> : null}
      </div>
      <TaskBar component={{
        programs: programs,
        setPrograms: setPrograms,
        visible: startMenu,
        setStartMenu: setStartMenu
      }} />
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBar from './pages/TaskBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Desktop from './pages/Desktop';
import lain from './assets/STORM5.gif'
import loveLain from './assets/LainLove.gif'
import Window from './pages/Window';
import Winamp from './pages/Winamp';

function App() {
  return (
    <div className="screen" id='app'>
      <div className="background">
        <div className="desktop-icons">
          <Desktop></Desktop>
          <Winamp/>
        </div>
        <div id='container-windows'>
        </div>
        
        <img className="lain" src={lain} alt="imagine lain" />
      </div>

      <TaskBar />

    </div>
  );
}

export default App;

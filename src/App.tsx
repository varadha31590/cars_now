import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Header />
        <div id="detail">
            <Outlet />
        </div>
    </div>
  );
}

export default App;

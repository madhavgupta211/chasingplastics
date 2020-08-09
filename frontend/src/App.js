import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main/mainComponent';


function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

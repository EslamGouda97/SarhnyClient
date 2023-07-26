import './App.css';
import AppRoutes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import React from 'react'


function App() { 
  return (
    <BrowserRouter>
    <div className="App">
    <AppRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;

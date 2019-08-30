import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import './App.css'
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App;
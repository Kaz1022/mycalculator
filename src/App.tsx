import React from 'react';
import '../src/Sass/App.scss';
import './App.css';
import Calculator from './component/Calculator';

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
     <Calculator />
    </div>
  );
}

export default App;

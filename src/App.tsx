import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CJDialog} from "./screens/CJDialog";

function App() {
  return (
    <div className="App">
      <CJDialog title={'My Modal'} buttonTitle={'Open Dialog'}>
        Dialog Content
      </CJDialog>
    </div>
  );
}

export default App;

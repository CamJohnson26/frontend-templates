import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CJDialog} from "./screens/CJDialog";
import {ImportText} from "./utilities/ImportText";

function App() {
  return (
      <div className="App">
          <h1>Frontend Templates</h1>
          <h2>CJDialog</h2>
          <CJDialog title={'My Modal'} buttonTitle={'Open Dialog'}>
              Dialog Content
          </CJDialog>
          <h2>Import Text</h2>
          <ImportText onImport={(text) => alert(text)}/>
      </div>
  );
}

export default App;

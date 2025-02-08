import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CJDialog} from "./screens/CJDialog";
import {ImportText} from "./utilities/ImportText";
import {RouteBar} from "./navigation/RouteBar";
import {NavigableList} from "./navigation/NavigableList";
import {TextField} from "@mui/material";
import {TextInput} from "./inputs/TextInput";

function App() {
  return (
      <div className="App">
          <RouteBar title={'Frontend Templates'} routes={[
              {
                  path: '/books',
                  name: 'Books',
                  component: <>Hello Book</>
              },
              {
                  path: '/bookmarks',
                  name: 'Bookmarks',
                  component: <>Hello Bookmarks</>
              }
          ]} />
          <h1>Frontend Templates</h1>
          <h2>CJDialog</h2>

          <NavigableList items={[
              {
                  name: 'First',
                  id: '1'
              },
              {
                  name: 'Second',
                  id: '2'
              }
          ]} onClick={(item) => alert(`${item} clicked`)} />
          <CJDialog title={'My Modal'} buttonTitle={'Open Dialog'}>
              Dialog Content
          </CJDialog>
          <h2>Import Text</h2>
          <ImportText onImport={(text) => alert(text)}/>
          <h2>Inputs</h2>
          <TextInput onChange={(text) =>alert('Text Changed: '+ text)} />
      </div>
  );
}

export default App;

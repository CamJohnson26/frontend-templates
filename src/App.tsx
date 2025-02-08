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
                  name: 'Colorful elephants danced on the moonlit beach, their trunks swaying to the rhythm of a nearby jazz band. Meanwhile, in a small village nestled in the rolling hills of Tuscany, a group of elderly librarians gathered around a steaming pot of Earl Grey tea to discuss the finer points of medieval illuminated manuscripts. Nearby, a flock of migratory quail made their annual journey from the great plains of North America to the sun-kissed savannas of Africa, where they would feast on succulent berries and soft grasses until the spring rains arrived once again.',
                  id: '1'
              },
              {
                  name: 'In a world where time was currency, the rich lived forever and the poor were left with nothing but the ticking clock in their minds. On the bustling streets of Tokyo, a team of robotic sushi chefs worked tirelessly to perfect the art of making the perfect California roll, while in the depths of the Amazon rainforest, a secret society of shamanic accordion players held sacred rituals to communicate with the spirits of the ancient forest. Meanwhile, on the distant planet of Zorvath, a lone astronaut named Captain Zara navigated the treacherous asteroid belt in search of the legendary Golden Donut of Andromeda, said to possess the power to grant any wish to its possessor.\n' +
                      '\n' +
                      '\n',
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

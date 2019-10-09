import React from 'react';

import Contact from './Components/Contact';

import Homer from './img/Homer_Simpson.png';
import Flanders from './img/Ned_Flanders.png';
import Burns from './img/Mr_Burns.png';

import './App.css';

let users = [{
  avatar: Homer,
  name: "Homer Simpson",
  status: false
},{
  avatar:Flanders,
  name: "Ned Flanders",
  status: true
},{
  avatar:Burns,
  name: "Mr Burns",
  status: true
}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {users.map((user) => {
            return(<Contact avatar={user.avatar} name={user.name} status={user.status}/>
              )
            })}
      </header>
    </div>
)}


{/* 
        <img src={Homer} className="App-logo" alt="Homer Simpson" title="Homer Simpson"/>
        <Contact name="Homer Simpson" status=null>
        </div>
      <img src={Flanders} className="App-logo" alt="Ned Flanders" title="Ned Flanders"/>
      <img src={Burns} className="App-logo" alt="Mr Burns" title="Mr Burns"/>
 */}

export default App;
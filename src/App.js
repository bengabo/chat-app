import React from 'react';

import ContactList from './Components/ContactList';
import './App.css';



// import Contact from './Components/Contact';

// import Homer from './img/Homer_Simpson.png';
// import Flanders from './img/Ned_Flanders.png';
// import Burns from './img/Mr_Burns.png';


// let users = [{
//   avatar: Homer,
//   name: "Homer Simpson",
//   status: false
// },{
//   avatar:Flanders,
//   name: "Ned Flanders",
//   status: true
// },{
//   avatar:Burns,
//   name: "Mr Burns",
//   status: true
// }]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList/>
      </header>
    </div>
)}


export default App;
import React from 'react';

import Contact from './Contact';

import Dolores from '../img/59.jpg'
import Paula from '../img/61.jpg'
import Yolanda from '../img/65.jpg'
import Dana from '../img/75.jpg'
import Charlie from '../img/93.jpg'

let users = [{
  avatar: Dolores,
  name: 'Dolores Brooks',
  status: true
},{
  avatar: Paula,
  name: 'Paul Andrews',
  status: true
},{
  avatar: Yolanda,
  name: 'Yolanda Hayes',
  status: true
},{
  avatar: Dana,
  name: 'Don Mitchell',
  status: true
},{
  avatar: Charlie,
  name: 'Charlie Andrews',
  status: false
}];

function ContactList() {
  return(
    <div>
      {users.map((user) => {
        return (<Contact avatar={user.avatar} name={user.name} status={user.status}/>)
      })}
    </div>
  );
}

export default ContactList;
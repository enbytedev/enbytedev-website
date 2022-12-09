import React from 'react';
import EnbyteTerminal from './components/EnbyteTerminal.js'

let user = undefined;
let setUser = undefined;

export default function App() {
  [user, setUser] = React.useState({username: 'guest', password: 'guest'})

  return (
    <div className='container'>
      <EnbyteTerminal />
    </div>
  )
}

export {user, setUser}
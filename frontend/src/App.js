import React from 'react';
import EnbyteTerminal from './components/EnbyteTerminal.js'

export const ACCESS_URL = 'http://localhost:8080/access'
export const API_URL = 'http://localhost:8080/api'

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
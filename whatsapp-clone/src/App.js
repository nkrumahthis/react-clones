import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Login';

function App() {

  const [ user, setUser ] = useState(null);

  return (
    <div className="app">

      {!user?(
        <Login/>
      ):(

      <div className="app__body">
        <BrowserRouter>
        <Sidebar />

          <Switch>

            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              
            </Route>
          </Switch>
          </BrowserRouter>
      </div>
      )}
    </div>
  );
}

export default App;

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Login';

import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch ] = useStateValue();


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

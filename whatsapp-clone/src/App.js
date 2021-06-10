import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="App__Body">
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
    </div>
  );
}

export default App;

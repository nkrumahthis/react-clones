import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <div className="App__Body">
        {/* sidebar */}
        <Sidebar />
        {/* chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import SongsList from './components/SongsList/SongsList';
import Controls from './components/Controls/Controls';

function App() {
  return (
    <div className="App">
      <SongsList />
      <Controls />
    </div>
  );
}

export default App;

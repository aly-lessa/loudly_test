import React from 'react';
import './App.css';
import SongsList from './components/SongsList/SongsList';
import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SongsList />
      <Controls />
    </div>
  );
}

export default App;

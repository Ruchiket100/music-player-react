import React from 'react';
import './styles/app.scss'
// components
import Song from './components/Song';
import Player from './components/Player';

function App() {
  return(
    <div>
      <Song/>
      <Player/>
    </div>
  )
}

export default App;

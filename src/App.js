import React,{useState} from 'react';
import './styles/app.scss'
// components
import Song from './components/Song';
import Player from './components/Player';
// data
import data from './utils'

function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)
  return(
    <div>
      <Song 
      currentSong={currentSong}
      />
      <Player
      currentSong={currentSong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      />
    </div>
  )
}

export default App;

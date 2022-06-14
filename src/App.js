import React,{useState,useRef} from 'react';
import './styles/app.scss'
// components
import Nav from './components/Nav'
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
// data
import data from './utils'

function App() {
  // refs
  const audioRef = useRef(null);
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibrary, setIsLibrary] = useState(false)
  return(
    <div >
      <Nav setIsLibrary={setIsLibrary} isLibrary={isLibrary}/>
      <Song 
      currentSong={currentSong}
      />
      <Player
      currentSong={currentSong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      audioRef={audioRef}
      />
      <Library isLibrary={isLibrary} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef}/>
    </div>
  )
}

export default App;

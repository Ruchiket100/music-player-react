import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs,setCurrentSong, setSongs , isPlaying,audioRef, isLibrary} )=>{
    return(
        <div className={`library-container ${isLibrary ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs-container">
                {songs.map(song => <LibrarySong audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} songs={songs} song={song} setCurrentSong={setCurrentSong} id={song.id} key={song.id}/>)}
            </div>
        </div>
    )
}

export default Library;
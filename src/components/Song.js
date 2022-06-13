import React from 'react'

const Song = ({currentSong})=>{
    return(
        <div className="song-container">
            <img src={currentSong.cover} alt="music-cover" />
            <h1>{currentSong.name}</h1>
            <p>{currentSong.artist}</p>
        </div>
    )
}

export default Song;
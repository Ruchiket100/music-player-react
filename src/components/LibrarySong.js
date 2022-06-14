import React from "react";

const LibrarySong = ({setSongs,songs,song, setCurrentSong, id, isPlaying, audioRef})=>{
    const onSongClickHandler = async ()=>{
        await setCurrentSong(song);
        //  make selected song state active
        const newSongs = songs.map((eachSong)=>{
            if(eachSong.id === id){
                setCurrentSong({...song,active:true})
                return({...eachSong, active: true})
                
            }else{
                return({...eachSong, active:false})
            }
        });
        setSongs(newSongs);
        // play song if isplaying
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then(audio=> audioRef.current.play())
            }
        }
        
        
    }
    return(
        <div className={`library-song ${ song.active ? 'active' : ''}`}onClick={onSongClickHandler}>
            <img src={song.cover} alt={song.name} />
            <div className="song-desc">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;
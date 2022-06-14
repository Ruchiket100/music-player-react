import React,{useState} from 'react';
//  font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({audioRef,songs,setSongs, setCurrentSong,currentSong, isPlaying, setIsPlaying})=>{
    
    // states
    const [songInfo, setSongInfo] = useState({
        duration: 0,
        currentTime: 0
    })
    // methods
    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        minutes = (minutes < 10) ? '0'+ minutes : minutes;
        let seconds = Math.floor(time % 60);
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        return(
            minutes + ':' + seconds
        )
    }
    // handlers
    // play song when click on play button
    const playSongHandler=() =>{
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying)
    }
    // audio duration and current time updater
    const onTimeUpdateHandler = (e)=>{
        let duration = e.target.duration;
        let current = e.target.currentTime;
        setSongInfo({...songInfo,
            duration: duration,
            currentTime: current
        })
    }
    // range input value passer
    const onInputChangeHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
        
    }
    // change song when click on < or >
    const changeSongHandler = (duration) => {
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
        if(duration === 'forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if(duration === 'backward'){
            if((currentIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length-1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
    }
    return(
        <div className="player-container">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.duration  || 0} value={songInfo.currentTime} onChange={onInputChangeHandler} />
                <p>{formatTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon onClick={()=> changeSongHandler('backward')} className='skip-back' icon={faAngleLeft}  size='2x'/>
            <FontAwesomeIcon onClick={playSongHandler} className='skip-forward' icon={isPlaying ? faPause : faPlay}  size='2x'/>
            <FontAwesomeIcon onClick={()=> changeSongHandler('forward')} className='play' icon={faAngleRight}  size='2x'/>
            </div>
            <audio onEnded={()=>setIsPlaying(!isPlaying)} onTimeUpdate={onTimeUpdateHandler} onLoadedMetadata={onTimeUpdateHandler} ref={audioRef} src={currentSong.audio} title={currentSong.name}></audio>
        </div>
    )
}

export default Player;
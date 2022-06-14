import React,{useState} from 'react';
//  font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({audioRef,currentSong, isPlaying, setIsPlaying})=>{
    
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
    const playSongHandler=() =>{
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying)
    }
    const onTimeUpdateHandler = (e)=>{
        let duration = e.target.duration;
        let current = e.target.currentTime;
        setSongInfo({...songInfo,
            duration: duration,
            currentTime: current
        })
    }
    const onInputChangeHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
        
    }
    return(
        <div className="player-container">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.duration  || 0} value={songInfo.currentTime} onChange={onInputChangeHandler} />
                <p>{formatTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon className='skip-back' icon={faAngleLeft}  size='2x'/>
            <FontAwesomeIcon onClick={playSongHandler} className='skip-forward' icon={isPlaying ? faPause : faPlay}  size='2x'/>
            <FontAwesomeIcon className='play' icon={faAngleRight}  size='2x'/>
            </div>
            <audio onEnded={()=>setIsPlaying(!isPlaying)} onTimeUpdate={onTimeUpdateHandler} onLoadedMetadata={onTimeUpdateHandler} ref={audioRef} src={currentSong.audio} title={currentSong.name}></audio>
        </div>
    )
}

export default Player;
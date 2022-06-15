import React,{useState,useEffect} from 'react';
//  font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({audioRef,songs,setSongs, setCurrentSong,currentSong, isPlaying, setIsPlaying})=>{
    
    // states
    const [songInfo, setSongInfo] = useState({
        duration: 0,
        currentTime: 0,
        trackAnimationPercentage : 0
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


    // useeffect 
    //  this runs whenever there is change in currentSong
    useEffect(()=>{
        // change state of the current song
        const newSongs = songs.map(song => {
            if(song.id === currentSong.id){
                return{
                    ...song, active : true
                }
            }
            else{
                return{
                    ...song, active : false
                }
            }
        })
        // assign new active to songs state
        setSongs(newSongs);
    },[currentSong]);


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
        // animate input track
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)
        setSongInfo({...songInfo,
            duration: duration,
            currentTime: current,
            trackAnimationPercentage: animationPercentage
        })
    }
    // range input value passer
    const onInputChangeHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
        
    }
    // change song when click on < or >
    const changeSongHandler = async (duration) => {
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
        // change song to the next
        if(duration === 'forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        // change song to the previous
        if(duration === 'backward'){
            if((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length-1]);
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        // if isplaying the next or previous song will also in play state
        if(isPlaying) audioRef.current.play()
    }

    const onEndedSongHandler = async ()=>{
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if(isPlaying) audioRef.current.play()
    }

    // Styles
    const animationTrackStyle  = {
        transform: `translateX(${songInfo.trackAnimationPercentage}%)`
    }
    const rangeBackgroundStyle = {
        background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`
    }
    return(
        <div className="player-container">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <div style={rangeBackgroundStyle} className="track">
                <input  type="range" min={0} max={songInfo.duration  || 0} value={songInfo.currentTime} onChange={onInputChangeHandler} />
                <div style={animationTrackStyle} className="track-animation"></div>
                </div>
                <p>{songInfo.duration ? formatTime( songInfo.duration): '00:00'}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon onClick={()=> changeSongHandler('backward')} className='skip-back' icon={faAngleLeft}  size='2x'/>
            <FontAwesomeIcon onClick={playSongHandler} className='skip-forward' icon={isPlaying ? faPause : faPlay}  size='2x'/>
            <FontAwesomeIcon onClick={()=> changeSongHandler('forward')} className='play' icon={faAngleRight}  size='2x'/>
            </div>
            <audio onEnded={onEndedSongHandler} onTimeUpdate={onTimeUpdateHandler} onLoadedMetadata={onTimeUpdateHandler} ref={audioRef} src={currentSong.audio} title={currentSong.name}></audio>
        </div>
    )
}

export default Player;
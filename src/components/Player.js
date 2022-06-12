import React from 'react';
//  font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ()=>{
    return(
        <div className="player-container">
            <div className="time-control">
                <p>start</p>
                <input type="range" />
                <p>end</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon className='skip-back' icon={faAngleLeft}  size='2x'/>
            <FontAwesomeIcon className='skip-forward' icon={faPlay}  size='2x'/>
            <FontAwesomeIcon className='play' icon={faAngleRight}  size='2x'/>
            </div>
        </div>
    )
}

export default Player;
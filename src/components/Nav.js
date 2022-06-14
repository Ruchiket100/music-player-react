import React from 'react';
//  font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({setIsLibrary, isLibrary})=>{
    return(
        <nav >
            <h1>Music Player</h1>
            <button onClick={()=> setIsLibrary(!isLibrary)}>Library <FontAwesomeIcon icon={faMusic} /></button>
        </nav>
    )
}

export default Nav;
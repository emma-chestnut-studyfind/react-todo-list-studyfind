import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const ToggleView = () => {
  const { hideOn, toggleView } = useContext(GlobalContext)

  return (
    <li className="drop-down">
        <input type="button" value={hideOn ? "Show Completed Tasks" : "Hide Completed Tasks"} className="dropbtn" onClick={e => { e.preventDefault() 
        toggleView(!hideOn)}}></input>
    </li>
  )
}

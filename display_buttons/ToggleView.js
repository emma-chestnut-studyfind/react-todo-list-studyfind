import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const ToggleView = () => {

  const { tasks } = useContext(GlobalContext)
  const { updateDisplay } = useContext(GlobalContext)

  const hideView = e => {
    e.preventDefault()
    const hideTasks = [...tasks].filter(t => t.notDone)
    updateDisplay(hideTasks)
  }

  const showView = e => {
    e.preventDefault()
    updateDisplay(tasks)
  }

  return (
    <li className="drop-down">
        <button className="dropbtn">Toggle View</button>
        <form className="dropdown-content">
          <div className="filter-control">
            <button onClick={hideView} className="filterbtn">Hide</button>
            <button onClick={showView} className="dropbtn resetbtn">Show</button>
          </div>
        </form>
    </li>
  )
}

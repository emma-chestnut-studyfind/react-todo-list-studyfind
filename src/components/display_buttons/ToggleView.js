import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const ToggleView = () => {
  // const { hideOn } = useContext(GlobalContext)
  // const { tasks } = useContext(GlobalContext)
  // const { toggleView } = useContext(GlobalContext)
  // const [view, setView] = useState(hideOn)

  // const hideView = e => {
  //   e.preventDefault()
  //   const hideTasks = [...tasks].filter(t => t.notDone)
  //   updateDisplay(hideTasks)
  //   hideOn = true
  // }

  // const showView = e => {
  //   e.preventDefault()
  //   // updateDisplay(tasks)
  //   hideOn = false
  // }


  {/* <button className="dropbtn">Toggle View</button>
        <form className="dropdown-content">
          <div className="filter-control">
            <button onClick={hideView} className="filterbtn">Hide</button>
            <button onClick={showView} className="dropbtn resetbtn">Show</button>
          </div>
        </form> */}


  const { toggleView } = useContext(GlobalContext)
  return (
    <li className="drop-down">
        <select className="dropbtn" onChange={(e) => toggleView(e.target.value)}>
          <option selected hidden>Toggle View</option>
          <option value={true}>Hide</option>
          <option value={false}>Show</option>
        </select>
    </li>
  )
}

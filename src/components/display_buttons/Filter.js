import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const Filter = () => {
  const { tasks } = useContext(GlobalContext)
  const { updateDisplay } = useContext(GlobalContext)
  const [filterDate, setFilterDate] = useState('')

  const filter = e => {
    e.preventDefault()

    const filteredTasks = [...tasks].filter(t => t.deadline === filterDate)
    updateDisplay(filteredTasks)
  }

  const reset = e => {
    updateDisplay(tasks)
  }

  return (
    <li className="drop-down">
        <button className="dropbtn">Filter</button>
        <form className="dropdown-content">
            <input type="text" value={filterDate} onChange={e => setFilterDate(e.target.value)}/>
            <div className="filter-control">
                <button onClick={filter} className="filterbtn">Apply</button>
                <button onClick={reset} className="dropbtn resetbtn">Reset</button>
            </div>
        </form>
    </li>
  )
}

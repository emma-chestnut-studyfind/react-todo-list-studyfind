import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const Filter = () => {
  const { filterByDay } = useContext(GlobalContext)
  const [inputDate, setInputDate] = useState('')

  const processFilterRequest = (e, date) => {
    e.preventDefault()
    filterByDay(date)
    setInputDate('')
  }

  return (
    <li className="drop-down">
      <button className="dropbtn">Filter</button>
      <form className="dropdown-content">
        <input type="text" className='filter-input' value={inputDate} onChange={e => setInputDate(e.target.value)} placeholder='mm/dd/yyyy'/>
          <div className="filter-control">
            <button onClick={e => processFilterRequest(e, inputDate)} className="filterbtn">Apply</button>
            <button onClick={e => processFilterRequest(e, '')} className="resetbtn">Reset</button>
          </div>
      </form>
    </li>
  )
}

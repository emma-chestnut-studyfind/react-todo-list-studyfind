import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Clear = () => {
  const { clearAllTasks } = useContext(GlobalContext)

  return (
    <>
      <button className="dropbtn clear" onClick={clearAllTasks}>Clear All Tasks</button>
    </>
  )
}

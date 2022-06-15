import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Task = ({task}) => {
    const { hideOn, toggleView } = useContext(GlobalContext)
    const [checked, setChecked] = useState(false)

    const checkOff = () => {
        setChecked(current => !current)
        task.notDone = !task.notDone
        if (hideOn) toggleView(hideOn)
    }
    
    return (
        <li onClick={checkOff} className={!task.notDone ? 'task task-grid checked' : 'task task-grid'} >
            <div className="task-name">{task.name}</div>
            <div className="task-deadline">{task.deadline}</div>
        </li>
    )
}

import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Task = ({task}) => {
    const { hideOn, toggleView, deleteTask } = useContext(GlobalContext)
    const [checked, setChecked] = useState(false)

    const checkOff = () => {
        setChecked(current => !current)
        task.isComplete = !task.isComplete
        if (hideOn) toggleView(hideOn)
    }
    
    
    return (
        <li onClick={checkOff} className={task.isComplete ? 'task task-grid checked' : 'task task-grid'}>
            <div className="task-name">{task.name}</div>
            <div className="task-deadline">{task.deadline}</div>
            <button className={task.isComplete ? 'task-delete gray-out' : 'task-delete'} onClick={() => deleteTask(task.id)}>x</button>
        </li>
    )
}

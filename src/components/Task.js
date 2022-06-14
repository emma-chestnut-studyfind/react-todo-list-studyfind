import React, {useState} from 'react'

export const Task = ({task}) => {
    const [checked, setChecked] = useState(false)

    const checkOff = () => {
        setChecked(current => !current)
        task.notDone = checked;
    }
    
    return (
        <li className={checked ? 'task task-grid checked' : 'task task-grid'} 
        onClick={checkOff}>
            <div className="task-name">{task.name}</div>
            <div className="task-deadline">{task.deadline}</div>
        </li>
    )
}

import React, {useContext} from 'react'
import { Task } from './Task'
import { GlobalContext } from '../context/GlobalState'

export const TaskList = () => {
    const { tasks, hideOn, filterDate } = useContext(GlobalContext)

    const todoToggleCheck = hideOn ? tasks.filter((t) => t.notDone) : tasks
    const todoFilterCheck = filterDate === '' ? todoToggleCheck : todoToggleCheck.filter(t => t.deadline === filterDate)

    return (
        <section className="tasks">
            <h2 className="tasks-title">Tasks</h2>
            <ul className="task-sheet">
                {todoFilterCheck.map(task => (<Task key={task.id} task={task}/>))}
            </ul>
        </section>
    )
}

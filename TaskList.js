import React, {useContext} from 'react'
import { Task } from './Task'
import { GlobalContext } from '../context/GlobalState'

export const TaskList = () => {
    const { tasks } = useContext(GlobalContext)

    return (
        <section className="tasks">
            <h2 className="tasks-title">Tasks</h2>
            <ul className="task-sheet">
                {tasks.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
            </ul>
        </section>
    )
}

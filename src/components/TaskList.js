import React, {useContext} from 'react'
import { Task } from './Task'
import { GlobalContext } from '../context/GlobalState'

export const TaskList = () => {
    const { tasks, hideOn, filterDate, sortOption } = useContext(GlobalContext)

    // Dynamically sorts
    const todoSortCheck = sortOption === 'name' ? tasks.sort((a, b) => a.name.localeCompare(b.name)) : (sortOption === 'deadline' ? tasks.sort((a, b) => new Date(a.deadline + ' CST') - new Date(b.deadline + ' CST')) : tasks)

    // Dynamically toggles
    const todoToggleCheck = hideOn ? todoSortCheck.filter((t) => t.notDone) : todoSortCheck

    // Dynamically filters
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

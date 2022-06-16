import React, {useContext} from 'react'
import { Task } from './Task'
import { GlobalContext } from '../context/GlobalState'

export const TaskList = () => {
    const { tasks, hideOn, filterDate, sortOption } = useContext(GlobalContext)

    const processTaskList = () => {
        const sortTasks = sortOption === 'name' ? tasks.sort((a, b) => a.name.localeCompare(b.name)) : (sortOption === 'deadline' ? tasks.sort((a, b) => new Date(a.deadline + ' CST') - new Date(b.deadline + ' CST')) : tasks)

        const toggleTasks = hideOn ? sortTasks.filter(t => !t.isComplete) : sortTasks

        const filterTasks = filterDate === '' ? toggleTasks : toggleTasks.filter(t => t.deadline === filterDate)
        
        return filterTasks
    }

    return (
        <section className="tasks">
            <h2 className="tasks-title">Tasks</h2>
            <ul className="task-sheet">
                {processTaskList().map(task => <Task key={task.id} task={task}/>)}
            </ul>
        </section>
    )
}

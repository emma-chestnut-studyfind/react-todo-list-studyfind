import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import plusSign from '../images/add-icon.png'

export const AddTask = () => {
    const [name, setName] = useState('')
    const [deadline, setDeadline] = useState('')
    const { addTask } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTask = {
            id: Math.floor(Math.random() * 100000000),
            name,
            deadline,
            notDone: true
        }

        addTask(newTask)
        setName('')
        setDeadline('')
    }

    return (
        <section className="task-add">
            <form onSubmit={onSubmit} className="new-task">
                <div className="form-control">
                    <input type="text"  value={name} className="new-task-name" placeholder="New Task" 
                    onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-control">
                    <input type="text" value={deadline} className="new-task-deadline" 
                    onBlur={e => e.target.placeholder="Deadline"} 
                    onFocus={e => e.target.placeholder='mm/dd/yyy'} 
                    onChange={(e) => setDeadline(e.target.value)} required />
                </div>
                <div className="form-control">
                    <button className="submit-task"><img src={plusSign} alt="" /></button>
                </div>
            </form>
        </section>
    )
}

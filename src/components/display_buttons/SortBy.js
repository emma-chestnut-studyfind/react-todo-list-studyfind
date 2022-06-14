import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const SortBy = () => {
    const { tasks } = useContext(GlobalContext)
    const { updateDisplay } = useContext(GlobalContext)
    const [sortType, setSortType] = useState('id');

    useEffect(() => {
        const sortArray = type => {
            switch(type) {
                case 'name':
                    const sortName = [...tasks].sort((a, b) => a.name.localeCompare(b.name))
                    updateDisplay(sortName)
                    break
                case 'deadline':
                    const sortDeadline = [...tasks].sort((a, b) => {
                        const dateA = new Date(a.deadline + ' CST')
                        const dateB = new Date(b.deadline + ' CST')
                        return dateA - dateB
                    })
                    updateDisplay(sortDeadline)
                    break
            }
        }
        sortArray(sortType)
    }, [sortType])

    return (
        <li className="drop-down">
            <select className="dropbtn" onChange={(e) => setSortType(e.target.value)}>
                <option selected hidden>Sort By</option>
                <option value='name'>Name</option>
                <option value='deadline'>Deadline</option>
            </select>
        </li>
    )
}

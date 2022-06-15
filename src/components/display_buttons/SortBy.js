import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const SortBy = () => {
    const { tasks } = useContext(GlobalContext)
    const { sortBy } = useContext(GlobalContext)
    const [sortType, setSortType] = useState('id');

    useEffect(() => {
        const sortArray = type => {
            switch(type) {
                case 'name':
                    const sortName = [...tasks].sort((a, b) => a.name.localeCompare(b.name))
                    sortBy(sortName)
                    break
                case 'deadline':
                    const sortDeadline = [...tasks].sort((a, b) => {
                        const dateA = new Date(a.deadline + ' CST')
                        const dateB = new Date(b.deadline + ' CST')
                        return dateA - dateB
                    })
                    sortBy(sortDeadline)
                    break
            }
        }
        sortArray(sortType)
    }, [sortType])

    return (
        <li className="drop-down">
            <select className="dropbtn select-sort" onChange={(e) => setSortType(e.target.value)}>
                <option selected hidden>Sort By</option>
                <option className="sort-option" value='name'>Name</option>
                <option className="sort-option" value='deadline'>Deadline</option>
            </select>
        </li>
    )
}

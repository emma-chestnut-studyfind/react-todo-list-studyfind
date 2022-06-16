import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const SortBy = () => {
    const { sortBy } = useContext(GlobalContext)

    return (
        <li className="drop-down">
            <select className="dropbtn select-sort" onChange={e => sortBy(e.target.value)}>
                <option selected hidden>Sort By</option>
                <option className="sort-option" value='name'>Name</option>
                <option className="sort-option" value='deadline'>Deadline</option>
            </select>
        </li>
    )
}

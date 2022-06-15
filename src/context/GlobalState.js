import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    tasks: [],
    hideOn: false,
    filterDate: ''
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function addTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        })
    }

    function sortBy(sortedTasks) {
        dispatch({
            type: 'SORT_BY',
            payload: sortedTasks
        })
    }

    function toggleView(view) {
        dispatch({
            type: 'TOGGLE_VIEW',
            payload: view
        })
    }

    function filterByDay(date) {
        dispatch({
            type: 'FILTER_BY_DAY',
            payload: date
        })
    }

    function clearAllTasks() {
        dispatch({
            type: 'CLEAR_ALL_TASKS',
            payload: []
        })
    }

    return (<GlobalContext.Provider value = {{
        tasks: state.tasks,
        hideOn: state.hideOn,
        filterDate: state.filterDate,
        addTask,
        sortBy,
        toggleView,
        filterByDay,
        clearAllTasks
    }}>
        {children}
    </GlobalContext.Provider>)
}   
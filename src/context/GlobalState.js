import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    tasks: [],
    hideOn: false,
    filterDate: '',
    sortOption: 'id'
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

    function deleteTask(id) {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })
    }

    return (<GlobalContext.Provider value = {{
        tasks: state.tasks,
        hideOn: state.hideOn,
        filterDate: state.filterDate,
        sortOption: state.sortOption,
        addTask,
        sortBy,
        toggleView,
        filterByDay,
        clearAllTasks,
        deleteTask
    }}>
        {children}
    </GlobalContext.Provider>)
}   
import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    tasks: [
        {id: 1, name: 'z', deadline: '12/25/2000', notDone: true},
        {id: 2, name: 'b', deadline: '12/23/2001', notDone: true},
        {id: 3, name: 'a', deadline: '12/25/2002', notDone: true}
    ]
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

    function updateDisplay(updatedTasks) {
        dispatch({
            type: 'UPDATE_DISPLAY',
            payload: updatedTasks
        })
    }

    // function sortBy(sortedTasks) {
    //     dispatch({
    //         type: 'SORT_BY',
    //         payload: sortedTasks
    //     })
    // }

    // function toggleView(toggleTasks) {
    //     dispatch({
    //         type: 'TOGGLE_VIEW',
    //         payload: toggleTasks
    //     })
    // }

    // function filterByDate(filteredTasks) {
    //     dispatch({
    //         type: 'FILTER_BY_DATE',
    //         payload: filteredTasks
    //     })
    // }

    // function resetDisplaySettings(originalTasks) {
    //     dispatch({
    //         type: 'RESET_DISPLAY',
    //         payload: originalTasks
    //     })
    // }

    function clearAllTasks() {
        dispatch({
            type: 'CLEAR_ALL_TASKS',
            payload: []
        })
    }

    return (<GlobalContext.Provider value = {{
        tasks: state.tasks,
        addTask,
        updateDisplay,
        clearAllTasks
    }}>
        {children}
    </GlobalContext.Provider>)
}   
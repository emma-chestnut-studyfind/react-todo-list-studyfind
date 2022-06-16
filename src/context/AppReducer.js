export default (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'SORT_BY':
            return {
                ...state,
                sortOption: action.payload
            }
        case 'TOGGLE_VIEW':
            return {
                ...state,
                hideOn: action.payload
            }
        case 'FILTER_BY_DAY':
            return {
                ...state,
                filterDate: action.payload
            }
        case 'CLEAR_ALL_TASKS':
            return {
                ...state,
                tasks: []
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}
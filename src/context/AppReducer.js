export default (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'TOGGLE_VIEW':
            return {
                ...state,
                hideOn: action.payload
            }
        case 'UPDATE_DISPLAY':
            return {
                ...state,
                tasks: action.payload
            }
        case 'CLEAR_ALL_TASKS':
            return {
                ...state,
                tasks: []
            }
        default:
            return state
    }
}
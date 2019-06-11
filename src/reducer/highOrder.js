const reducer = (state = { title: "highOrder", value: "initValue"  }, action) => {
    switch(action.type) {
        case 'change_prop':
            return Object.assign({}, state, { value: action.value})
            // newState.text=action.text
            break
        default:
            return state
    }
}
export default reducer;
const reducer = (state = { text: "init" }, action) => {
    switch(action.type) {
        case 'CHANGE_TEXT':
            return Object.assign({}, state, { text: action.text})
            // newState.text=action.text
            break
        default:
            return state
    }
}
export default reducer;
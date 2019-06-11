import { combineReducers } from 'redux'
import page from './page.js'
import highOrder from './highOrder.js'
export default combineReducers({
    page,
    highOrder,
})

// test combineReducer
const data = {
    a: (state, action) => {
        console.log('enter a')
        return { ...state, a: action.text}
    },
    b: (state, action) => {
        console.log('enter b')
        return { ...state, b: action.text}
    },
    c: (state, action) => {
        console.log('enter c')
        return { ...state, c: action.text}
    },
}
const crFunc = data => {
    return (state, action) => (
        Object.keys(data).reduce((nextState, key) => {
            return nextState[key] = data[key](state[key], action)
        }, {})
    )
}
const initState = {
    a: 1,
    b: 1,
    c: 1,
}
// crFunc(data)(initState, {text: 2})
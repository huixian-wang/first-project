const CHANGE_TEXT = 'CHANGE_TEXT'

const changeText = function(text) {
    return {
        type: CHANGE_TEXT,
        text
    }
}
export default {
    changeText
}
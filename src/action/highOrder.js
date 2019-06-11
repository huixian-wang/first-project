const CHANGE_VALUE = 'CHANGE_VALUE'

const changeValue = function(text) {
    return {
        type: CHANGE_VALUE,
        text
    }
}
export default {
    changeValue
}
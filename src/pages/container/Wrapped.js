import {createSelector} from "reselect";
import {connect} from "react-redux";
// import Wrapped from '../highOrderCom/Wrapped'
import TestHOCCom from '../highOrderCom/TestHOCCom'

const getWrapped = state => {
    // console.log(state.highOrder, 777777)
    return state.highOrder
}
const selector = createSelector(
    [getWrapped],
    state => state,
)
export default connect(selector)(TestHOCCom)

import {
    connect,
} from 'react-redux'

import MemoApp from './../components/MemoApp'
import Actions from './../actions/AppActions'

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleTodoAdd(value) {
            dispatch(Actions.addTodo(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoApp)
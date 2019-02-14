// 初期State
const initialState = {
    tasks: [],
    text: '',
}
// Reducer処理
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTASK': {
            return console.log(action.value)
        }
        case 'ENDTASK': {
            return console.log(action.value)
        }
        case 'UPDTASK': {
            return console.log(action.value)
        }
        case 'DELTASK': {
            return console.log(action.value)
        }
        default: {
            return state
        }
    }
}

export default reducer

import React from 'react'
import ReactDOM from 'react-dom'
// ①
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// ② 4の項目で解説
import MemoApp from './components/MemoApp'

// ③ 次の項目で解説
import reducer from './reducers/reducer'


// ④
const store = createStore(reducer)

// ⑤
ReactDOM.render(
    <Provider store={store}>
        <MemoApp />
    </Provider>,
    document.getElementById('root')
)
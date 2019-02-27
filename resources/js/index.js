import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MemoApp from './components/MemoApp'
import createFinalStore from './store';

const store = createFinalStore()

// ⑤
ReactDOM.render(
    <Provider store={store}>
        <MemoApp />
    </Provider>,
    document.getElementById('root')
)
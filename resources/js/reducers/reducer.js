import { combineReducers } from 'redux'
import { ADD_TEXT, CLEAR_TEXT } from '../actions/AppActions.js';

/*
  Reducer:
  ReducerはAction Creatorから渡されたデータをもとに新しい State を作成して返す。
*/

// アプリ起動時のstate
let initialState = [
    {
        id: 0,
        text: 'Hello Redux and React!'
    }
]

// State がundefinedの場合はデフォルト引数でinitialStateを使用するようにする
let text = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            //ADD_TEXTアクションが来た時は現状の state にAction Creatorから returnされたデータを元に新規オブジェクトを作成、state にプラスして新しい state を返す
            return [
                // Spread Operator (...) で現状の state を全て要素として配列中に展開する: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator
                ...state,
                //下記はADD_TEXTアクションによって新たに state に追加されるオブジェクト
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case CLEAR_TEXT:
            // CLEAT_TEXTアクションが来た場合には空の配列を返して state を初期化する
            return []
        default:
            return state
    }
};

// entry.js内部で Provider コンポーネントにセットするデータストア。<Provider>以下でthis.props.state.storedTextの形で state にアクセス可能。
export const store = combineReducers(
    {
        storedText: text
    }
)
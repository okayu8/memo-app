import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TitleAndText from './TitleAndText.js';
import Edit from './Edit.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addText, clearText } from '../actions/AppActions';

class MemoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memoId: null,
            memoTitle: 'Memo App',
            memoText: 'This is Memo Text',
            memosData: '',
            mode: 'show',
            reduxText: 'ADDTASK',
            todo: ""
        }
    }

    componentDidMount() {
        axios.get('/api/memos')
            .then(response => {
                console.log('memos.data:' + JSON.stringify(response.data))
                this.setState({
                    data: response.data,
                    nextUrl: response.data.next_page_url,
                    prevUrl: response.data.prev_page_url,
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    switchMode() {
        this.setState({ mode: this.state.mode == "edit" ? "show" : "edit" })
    }

    click(param) {
        this.setState({
            memoTitle: param,
            memoId: 0
        })
    }

    render() {
        return (<div className="container-fluid">
            <div className="row">
                <div className="col-md-3" style={{ padding: 0 }}>
                    <div className="card">
                        <div
                            className="card-header"
                            style={{ backgroundColor: "rgb(172, 27, 46)", color: "#FFFFFF", fontSize: 18 }}>
                            Memo Title
                                <button
                                onClick={() => this.AddTasks()}
                                className="btn"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 5,
                                    color: "white",
                                    fontSize: 24
                                }}>+</button>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item" onClick={() => this.click("test111")}>
                                test1
                            </li>
                            <li className="list-group-item" onClick={() => this.click("test222")}>
                                test2
                            </li>
                            <li className="list-group-item" onClick={() => this.click("test333")}>
                                test3
                            </li>
                        </ul>
                    </div>
                </div>
                <MemoContent
                    mode={this.state.mode}
                    text={this.state.memoTitle}
                    memoId={this.state.memoId}
                    memoTitle={this.state.memoTitle}
                />

                {/* 以下テスト */}
                <button onClick={() => { this.switchMode() }} />
                <input type='text' ref='input' /><br />
                <button onClick={(e) => this.onAddBtnClicked(e)}   >Add</button>
                <button onClick={(e) => this.onClearBtnClicked(e)} >Clear</button>
                <ul>
                    {
                        //state中のオブジェクトをループさせて<li>要素を描画。stateは selector() メソッドで指定しているものがpropsとして渡ってくる
                        this.props.state.storedText.map((obj) =>
                            <li key={obj.id} >
                                {obj.text}
                            </li>
                        )
                    }
                </ul>
                {/* 以上テスト */}
            </div>

        </div>);
    }

    onAddBtnClicked(e) {
        let input = this.refs.input
        let text = input.value.trim()
        if (!text) return alert('何かテキストを入力してください。')
        input.value = ''
        // Appコンポーネントが connect() メソッドでラップされていることによって、dispatchメソッドを呼び出すことが可能になる
        // dispatch() メソッドで ActionCreator である addText() メソッドをラップして呼び出すことによってデータの変更を伝播する
        this.props.dispatch(addText(text))
    }

    //Clear ボタンをクリックした時に呼び出される
    onClearBtnClicked(e) {
        // dispatchメソッドで ActionCreator であるclearText() メソッドをラップして呼び出すことによってデータの変更を伝播する
        this.props.dispatch(clearText())
    }

}

class MemoContent extends Component {
    render() {
        console.log(this.props.mode)
        return (
            <div className="col-md-9" style={{ padding: 0 }}>
                {this.props.mode === 'show' ?
                    <TitleAndText
                        text={this.props.memoTitle}
                        memoId={this.props.memoId}
                        memoTitle={this.props.memoTitle}
                    />
                    : <Edit
                        text={this.props.memoTitle}
                        memoId={this.props.memoId}
                        memoTitle={this.props.memoTitle}
                    />}
            </div>

        )
    }
}



// セレクターの定義: Appコンポーネントが必要とするデータを グローバルなstate 全体の中から取捨選択して取得する。今回は state 全体をそのままreturnしている
let selector = (state) => {
    // [storedText]というキー名はreducer.jsの最下部で設定している Store のキー名
    console.log(state.storedText);
    return {
        state: state // Key名とvalue名が同じなので return {state} でも可: Object Literal Shorthand
    }
}

export default connect(selector)(MemoApp)



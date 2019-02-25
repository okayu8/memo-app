import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TitleAndText from './TitleAndText.js';
import Edit from './Edit.js';

export default class MemoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memoId: null,
            memoTitle: 'Memo App',
            memoText: 'This is Memo Text',
            memosData: '',
            mode: 'show',
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
                <button onClick={() => { this.switchMode() }} />
                <MemoContent
                    mode={this.state.mode}
                    text={this.state.memoTitle}
                    memoId={this.state.memoId}
                    memoTitle={this.state.memoTitle}
                />

            </div>
        </div>);
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

if (document.getElementById('memoApp')) {
    ReactDOM.render(<MemoApp />, document.getElementById('memoApp'));
}

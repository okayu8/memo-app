import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Text from './Text.js';

export default class MemoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memoId: null,
            memoTitle: 'Memo App'
        }
    }

    click(param) {
        this.setState({
            memoTitle: param,
            memoId: 0
        })
    }

    render() {
        return (

            <div className="container-fluid">
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
                                <li className="list-group-item" onClick={() => this.click("test1")}>
                                    test1
                                </li>
                                <li className="list-group-item" onClick={() => this.click("test2")}>
                                    test2
                                </li>
                                <li className="list-group-item" onClick={() => this.click("test3")}>
                                    test3
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9" style={{ padding: 0 }}>
                        <div className="card">
                            <div
                                className="card-header"
                                style={{ backgroundColor: "#008ECC", color: "#FFFFFF", fontSize: 18 }}>
                                {this.state.memoTitle}
                            </div>
                            <Text
                                text={this.state.memoTitle}
                                memoId={this.state.memoId}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

if (document.getElementById('memoApp')) {
    ReactDOM.render(<MemoApp />, document.getElementById('memoApp'));
}

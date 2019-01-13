import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Text from './Text.js';

export default class MemoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memoId: '',
            memoTitle: ''
        }
    }

    click(param) {
        this.setState({ memoTitle: param })
    }

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">Memo Title</div>
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
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header">{this.state.memoTitle}</div>
                            <Text
                                text={this.state.memoTitle}
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

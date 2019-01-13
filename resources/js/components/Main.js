import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Main extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">Memo Title</div>

                            <div className="card-body">
                                This is my app!
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header">Memo Text</div>

                            <div className="card-body">
                                This is my app!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

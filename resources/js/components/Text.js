import React, { Component } from 'react';

export default class Text extends Component {

    render() {
        return (
            <div className="card-body" >
                {this.props.text}
            </div>
        )
    }
}
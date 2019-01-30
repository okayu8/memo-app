import React, { Component } from 'react';

export default class TitleAndText extends Component {

    render() {
        return (
            <div className="card">
                <div
                    className="card-header"
                    style={{ backgroundColor: "#008ECC", color: "#FFFFFF", fontSize: 18 }}>
                    {this.props.memoTitle}
                </div>
                <div className="card-body" >
                    {this.props.text}
                </div>
            </div >
        )
    }
}
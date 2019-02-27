import React, { Component } from 'react';
import Editor from 'draft-js-editor'

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: "",
            text: ""
        }
    }

    componentDidMount() {
        this.setState({ editorState: "" })
        this.setState({ text: this.props.text })
    }

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
                    <Editor
                        onChange={(editorState) => this.setState(
                            { editorState: editorState })}
                        editorState={this.state.editorState}
                    />
                </div>
            </div >
        )
    }
}
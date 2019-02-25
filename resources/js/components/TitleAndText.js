import React, { Component } from 'react';
import Editor from 'draft-js-editor'

export default class TitleAndText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: "",
        }
    }

    componentDidMount() {
        this.setState({ editorState: "" })
    }

    switchMode() {
        this.setState({ mode: this.state.mode == "edit" ? "preview" : "edit" })
    }

    render() {
        if (this.state.mode === "edit") {
            return (
                <div className="card">
                    <div
                        className="card-header"
                        style={{ backgroundColor: "#008ECC", color: "#FFFFFF", fontSize: 18 }}>
                        {this.props.memoTitle}
                        <button onClick={() => { this.switchMode() }} />
                    </div>
                    <Editor
                        onChange={(editorState) => this.setState(
                            { editorState: editorState })}
                        editorState={this.state.editorState}
                    />
                </div>
            )
        }
        else {
            return (
                <div className="card">
                    <div
                        className="card-header"
                        style={{ backgroundColor: "#008ECC", color: "#FFFFFF", fontSize: 18 }}>
                        {this.props.memoTitle}
                        <button onClick={() => { this.switchMode() }} />
                    </div>
                    <div className="card-body" >
                        {this.props.text}
                    </div>
                </div >
            )
        }
    }
}
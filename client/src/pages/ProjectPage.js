import React, { Component } from 'react';

export default class ProjectPage extends Component {
    constructor(props) {
        super()
        this.state = {
            title: props.title,
            text: props.text 
        }
    }

    render() {
        return (
            <div style={{
                backgroundColor: "midnightblue",
                color: "white",
                padding: "25px"
            }}>
                <h1 style={{textAlign: "center"}}>{this.state.title}</h1>
                <hr style={{width: "75%"}} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}

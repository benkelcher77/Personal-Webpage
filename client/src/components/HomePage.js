import React, { Component } from 'react';

export default class HomePage extends Component {

    state = {
        displayName: "Ben Kelcher"
    }

    render() {
        return (
            <div style={{
                backgroundColor: "midnightblue",
                color: "white",
                padding: "25px",
                textAlign: "center"
            }}>
                <h1>{this.state.displayName}</h1>
                <a href="/git"><img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/icons/icons8-github.svg"} alt="Git" /></a>
                <a href="https://www.linkedin.com/in/benjamin-kelcher-8a256a220/"><img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/icons/icons8-linkedin-circled.svg"} alt="LinkedIn" /></a>
            </div>
        );
    }

}

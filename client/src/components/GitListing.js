import React, { Component } from 'react';

class GitRepo extends Component {

    static normalStyle = {
        backgroundColor: "midnightblue",
        color: "white",
        textAlign: "center",
        padding: "10px"
    }

    static hoverStyle = {
        backgroundColor: "#252580",
        color: "white",
        textAlign: "center",
        padding: "10px",
    }

    static buttonStyle = {
        background: "none",
        border: "none",
        color: "white",
        width: "100%",
        height: "100%"
    }

    state = {
        detailedView: false,
        hover: false
    };

    constructor(props) {
        super()
        this.repo = props.repo
    }

    onClick() {
        this.setState({ detailedView: !this.state.detailedView });
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        let updatedDateTime = new Date(this.repo.updated_at);
        let updatedDateString = updatedDateTime.toDateString();
        let updatedTimeString = updatedDateTime.toTimeString();

        return (
            <div style={(this.state.hover) ? GitRepo.hoverStyle : GitRepo.normalStyle} 
                onMouseEnter={() => this.toggleHover()}
                onMouseLeave={() => this.toggleHover()}
            >
                <button style={GitRepo.buttonStyle} onClick={() => this.onClick()}><h3>{this.repo.name}</h3></button>
                {
                    (this.state.detailedView) && 
                    (
                        <div>
                            <p>Updated {updatedDateString} at {updatedTimeString}</p>
                        </div>
                    )
                }
            </div>
        );
    }

}

export default class GitListing extends Component {

    state = {
        repos: []
    };

    componentDidMount() {
        fetch("/git")
            .then(response => response.json())
            .then(response => { 
                this.setState({ repos: response })
            });
    }

    render() {

        return (
            <div>
                {
                    (this.state.repos.length == 0) 
                    ? (<p>Loading...</p>)
                    : (
                        this.state.repos.map((repo, i) => {
                            return (<GitRepo repo={repo} />);
                        })
                    )
                } 
            </div>
        );
    }
}

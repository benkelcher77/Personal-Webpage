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

    toggleDetailedView() {
        this.setState({ detailedView: !this.state.detailedView });
    }

    onMouseEnterDiv() {
        this.setState({ hover: true });
    }

    onMouseExitDiv() {
        this.setState({ hover: false });
    }

    render() {
        let updatedDateTime = new Date(this.repo.updated_at);
        let updatedDateString = updatedDateTime.toDateString();
        let updatedTimeString = updatedDateTime.toTimeString();

        return (
            <div 
                style={(this.state.hover) ? GitRepo.hoverStyle : GitRepo.normalStyle} 
                onMouseEnter={() => this.onMouseEnterDiv()}
                onMouseLeave={() => this.onMouseExitDiv()}
            >
                <button style={GitRepo.buttonStyle} onClick={() => this.toggleDetailedView()}><h3>{this.repo.name}</h3></button>
                {
                    (this.state.detailedView) && 
                    (
                        <div>
                            <p>
                                Updated {updatedDateString} at {updatedTimeString}
                                <a href={`https://www.github.com/benkelcher77/${this.repo.name}`}>
                                    <img 
                                        style={{padding: "10px", float: "left"}} 
                                        src={process.env.PUBLIC_URL + "/icons/icons8-github.svg"} 
                                        alt="Github Page" 
                                        title="Github Page"
                                    />
                                </a>
                            </p>
                        </div>
                    )
                }
            </div>
        );
    }

}

export default class GitListing extends Component {

    static divStyle = {
        backgroundColor: "midnightblue",
        color: "white",
        padding: "10px"
    };

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
            <div style={GitListing.divStyle}>
                <h1 style={{textAlign: "center"}}>Software Projects</h1>
                <hr style={{width: "50%"}}/>
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

import React, { Component } from 'react';

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
                            return (<p key={i}>{repo.name}</p>);
                        })
                    )
                } 
            </div>
        );
    }
}

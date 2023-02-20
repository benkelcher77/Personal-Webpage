import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GitListing from './pages/GitListing';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

class App extends Component {

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' exact element={ <HomePage/> } />
                    <Route path='/git' element={ <GitListing/> } />

                    <Route path='/projects-paintball' element={ <ProjectPage title="Paintball" text="Paintball temp text" /> } />
                    <Route path='/projects-tfs' element={ <ProjectPage title="Terminal File System" text="TFS temp text" /> } />
                    <Route path='/projects-personal-website' element={ <ProjectPage title="Personal Website" text="Personal Website temp text" /> } />
                </Routes>
            </Router>
        );
    }
}

export default App;

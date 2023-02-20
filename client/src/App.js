import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GitListing from './pages/GitListing';
import HomePage from './pages/HomePage';

class App extends Component {

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' exact element={ <HomePage/> } />
                    <Route path='/git' element={ <GitListing/> } />
                </Routes>
            </Router>
        );
    }
}

export default App;

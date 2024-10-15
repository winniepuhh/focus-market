import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

const App: React.FC = () => {
    return (
        <Router>
            <HomePage />
            <Routes>
                <Route path="/focus-wall"/>
                <Route path="/cube"  />
                <Route path="/flag" />
                <Route path="/contact" />
            </Routes>
        </Router>
    );
};

export default App;

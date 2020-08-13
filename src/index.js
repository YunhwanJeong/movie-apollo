import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const Root = () => {
    return (
        <Router>
            <App />
        </Router>
    )
};

ReactDOM.render(<Root />, document.getElementById('root'));

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Experience from './components/Experience';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Experience} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
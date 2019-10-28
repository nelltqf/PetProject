import React, {Component} from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {QuestionsContainer} from "./components/container/QuestionsContainer";
import '../node_modules/highlight.js/styles/github.css';

class App extends Component {

    render() {
        return (
            // TODO: about switch https://reacttraining.com/react-router/web/api/Switch
            <Router>
                <div className="app">
                    <Route exact path="/" component={QuestionsContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;

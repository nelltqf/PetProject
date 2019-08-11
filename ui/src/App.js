import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {LoginForm} from "./components/login/LoginForm";
import {QuestionsForm} from "./components/questions/QuestionsForm";

class App extends Component {

    state = {
        stepMap: new Map([["Step 1", {title: "", description: ""}]]),
        currentStep: "Step 1",
    };

    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={QuestionsForm}/>
                    <Route path='/login' component={LoginForm}/>
                </div>
            </Router>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LoginForm} from "./components/login/LoginForm";
import {QuestionsForm} from "./components/forms/QuestionsForm";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={QuestionsForm}/>
                    <Route exact path="/questions" component={QuestionsForm}/>
                    <Route exact path="/add" component={QuestionsForm}/>
                    <Route exact path="/account" component={QuestionsForm}/>
                    <Route path='/login' component={LoginForm}/>
                </div>
            </Router>
        );
    }
}

export default App;

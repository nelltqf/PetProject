import React, {Component} from 'react';
import {AddQuestionForm} from "./AddQuestionForm";
import "../../css/App.css";
import {BASE_URL} from "../../constants/Constants";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {QuestionsDisplayForm} from "./QuestionsDisplayForm";
import {BrowserRouter as Router} from "react-router-dom";

export class QuestionsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCategory: 0,
            categories: [],
            tab: 0
        };
    }

    selectCategory = (category) => {
        this.setState({
            currentCategory: category
        })
    };

    componentDidMount() {
        fetch(`${BASE_URL}/categories`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState({
                    categories: response
                });
            })
            .catch(error => console.error(error));
    }

    selectTab(event, tab) {
        debugger;
        this.setState({
            tab: tab
        })
    }

    render() {

        let elements = {
            0: <QuestionsDisplayForm categories={this.state.categories}
                                     currentCategory={this.state.currentCategory}
                                     selectCategory={this.selectCategory}/>,
            1: <AddQuestionForm categories={this.state.categories}/>,
            2: <p>Account</p>
        };

        return <Router>
            <div className="root">
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.tab}
                        onChange={this.selectTab.bind(this)}
                    >
                        <Tab value={0} label="Questions"/>
                        <Tab value={1} label="Add question"/>
                        <Tab value={2} label="Account"/>
                    </Tabs>
                </AppBar>
                {elements[this.state.tab]}
            </div>
        </Router>
    }
}
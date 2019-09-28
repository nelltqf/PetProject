import React, {Component} from 'react';
import {AddQuestionForm} from "./AddQuestionForm";
import "../../css/App.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {QuestionsDisplayForm} from "./QuestionsDisplayForm";
import {BrowserRouter as Router} from "react-router-dom";
import {QuestionsApi} from "../service/QuestionsApi";

export class QuestionsForm extends Component {
    questionsApi = new QuestionsApi();

    constructor(props) {
        super(props);

        this.state = {
            currentCategory: 1,
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
        this.questionsApi.fetchCategories()
            .then(response => {
                console.log(response);
                this.setState({
                        categories: response
                    }
                )
            });
    }

    selectTab(event, tab) {
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
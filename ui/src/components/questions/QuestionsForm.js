import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import {CategoriesList} from "../categories/CategoriesList";
import {QuestionsList} from "./QuestionsList";
import {AddQuestionForm} from "./AddQuestionForm";
import "./Questions.css";
import {BASE_URL} from "../Constants";

export class QuestionsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCategory: 0,
            categories: []
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

    render() {

        return <div className="root">
            <Typography component="h1" variant="h5">
                Interview Questions
            </Typography>
            <div className="horizontal-form">
                <CategoriesList categories={this.state.categories}
                                currentCategory={this.state.currentCategory}
                                selectCategory={this.selectCategory}/>
                <QuestionsList currentCategory={this.state.currentCategory}/>
                <AddQuestionForm categories={this.state.categories}/>
            </div>
        </div>
    }
}
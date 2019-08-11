import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import {CategoriesList} from "../categories/CategoriesList";
import {QuestionsList} from "./QuestionsList";
import {AddQuestionForm} from "./AddQuestionForm";
import "./Questions.css";

export class QuestionsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCategory: 0
        };
    }

    selectCategory = (category) => {
        this.setState({
            currentCategory: category
        })
    };

    render() {

        return <div className="root">
            <Typography component="h1" variant="h5">
                Interview Questions
            </Typography>
            <div className="horizontal-form">
                <CategoriesList currentCategory={this.state.currentCategory} selectCategory={this.selectCategory}/>
                <QuestionsList />
                <AddQuestionForm/>
            </div>
        </div>
    }
}
import React, {Component} from 'react';
import List from "@material-ui/core/List";
import "./Questions.css";
import ListItem from "@material-ui/core/ListItem";
import {BASE_URL} from "../Constants";
import {QuestionItem} from "./QuestionItem";

export class QuestionsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        this.fetchQuestions(this.props.currentCategory);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchQuestions(nextProps.currentCategory);
    }

    fetchQuestions(categoryId) {
        fetch(`${BASE_URL}/questions/${categoryId}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState({
                    questions: response
                });
            })
            .catch(error => console.error(error));
    }

    questionItems = () => this.state.questions.map((question, i) => {
        return (
            <ListItem key={i} >
                    <QuestionItem questionItem={question} />
            </ListItem>
        )
    });

    render() {
        return <div className="list"><List>{this.questionItems()}</List></div>;
    }

};
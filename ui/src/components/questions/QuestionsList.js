import React, {Component} from 'react';
import List from "@material-ui/core/List";
import "./Questions.css";
import ListItem from "@material-ui/core/ListItem";
import {BASE_URL} from "../Constants";

export class QuestionsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        fetch(`${BASE_URL}/questions/${this.props.currentCategory}`)
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
                    {question}
            </ListItem>
        )
    });

    render() {
        return <div className="list"><List>{this.questionItems()}</List></div>;
    }

};
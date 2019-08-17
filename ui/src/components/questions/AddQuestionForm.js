import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {BASE_URL} from "../Constants";

export class AddQuestionForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
        };
    }

    handleChange = fieldName => {
        return event => {
            this.setState({
                [fieldName]: event.target.value
            });
        };
    };

    save = () => {
        this.saveQuestion({
            question: this.state.question,
            answer: this.state.answer,
        });
        this.setState({
            question: "",
            answer: "",
        })
    };

    saveQuestion = question => {
        fetch(`${BASE_URL}/addQuestion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(question),
        })
            .then(response => {
                return response.json();
            })
            .catch(error => console.error(error));
    };

    render() {
        return (
            <div className="vertical-form">
                <Typography component="h1" variant="h5">Add question</Typography>
                <TextField label="Question"
                           margin="dense"
                           variant="outlined"
                           multiline rows="2"
                           value={this.state.question}
                           onChange={this.handleChange('question')}
                />
                <TextField label="Answer"
                           margin="dense"
                           variant="outlined"
                           multiline rows="10"
                           value={this.state.answer}
                           onChange={this.handleChange('answer')}
                />
                <Button variant="contained" color="primary" onClick={this.save}>Save</Button>
            </div>
        );
    };
}
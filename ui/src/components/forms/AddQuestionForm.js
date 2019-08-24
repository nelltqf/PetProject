import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {BASE_URL} from "../../constants/Constants";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Rating from 'material-ui-rating'
import "../../css/App.css";
import {Bookmark, BookmarkBorder} from "@material-ui/icons";

export class AddQuestionForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
            category: 0,
            difficulty: 0
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
            category: this.state.category,
            difficulty: this.state.difficulty,
        });
        this.setState({
            question: "",
            answer: "",
            difficulty: 0
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

    categories = () => {
        return this.props.categories.map((category, i) => {
            return <MenuItem key={i} value={i}>{category}</MenuItem>;
        })
    };

    render() {
        return (
            <div className="vertical-form">
                <Typography component="h1" variant="h5">Add question</Typography>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-simple">
                        Category
                    </InputLabel>
                    <Select
                        labelWidth={70}
                        value={this.state.category}
                        onChange={this.handleChange('category')}
                        input={<OutlinedInput name="category" id="outlined-age-simple"/>}
                    >
                        {this.categories()}
                    </Select>
                </FormControl>
                <TextField
                    label="Question"
                    margin="dense"
                    variant="outlined"
                    multiline rows="2"
                    value={this.state.question}
                    onChange={this.handleChange('question')}
                />
                <TextField
                    label="Answer"
                    margin="dense"
                    variant="outlined"
                    multiline rows="10"
                    value={this.state.answer}
                    onChange={this.handleChange('answer')}
                />
                <Typography component="h6" variant="h6">Difficulty</Typography>
                <Rating
                    value={this.state.difficulty}
                    max={4}
                    iconFilled={<Bookmark/>}
                    iconHovered={<Bookmark/>}
                    iconNormal={<BookmarkBorder/>}
                    onChange={(value) => this.setState({difficulty: value})}
                />
                <Button
                    variant="contained" color="primary" onClick={this.save}>Save</Button>
            </div>
        );
    };
}
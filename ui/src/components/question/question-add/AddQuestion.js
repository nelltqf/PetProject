import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Rating from 'material-ui-rating'
import "../../../css/App.css";
import {Bookmark, BookmarkBorder} from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import {QuestionsApi} from "../../service/QuestionsApi";
import {ErrorDialog} from "../../service/ErrorDialog";

export class AddQuestion extends Component {
    questionsApi = new QuestionsApi();

    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
            category: "",
            difficulty: 0,
            openDialog: false,
            loading: false,
            error: 'Some error has occurred'
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
        // TODO replace this simple check with real validation
        if (!this.state.category) {
            this.setState({
                error: 'Please provide the category',
                openDialog: true
            })
        } else if (!this.state.question) {
            this.setState({
                error: 'Please provide the question',
                openDialog: true
            })
        } else {
            this.setState({
                loading: true
            });
            this.questionsApi.saveQuestion({
                questionText: this.state.question,
                answerText: this.state.answer,
                categoryId: this.state.category,
                difficultyId: this.state.difficulty,
            })
                .then(() => {
                    this.setState({
                        question: "",
                        answer: "",
                        difficulty: 0,
                        loading: false
                    });
                })
                .catch(error => {
                    console.error(error.message);
                    this.setState({
                        openDialog: true,
                        loading: false
                    })
                });
        }

    };

    handleClose() {
        this.setState({
            openDialog: false
        })
    }

    categories = () => this.props.categories.map((category, i) => <MenuItem key={i}
                                                                            value={category.id}>{category.name}</MenuItem>);

    render() {
        return (
            <div className="vertical-form">
                <ErrorDialog isOpen={this.state.openDialog}
                             handleClose={this.handleClose.bind(this)}
                             title={this.state.error}/>
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
                    multiline rows="10"
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
                <Button variant="contained" color="primary" onClick={this.save}>Save</Button>
                {this.state.loading ? <CircularProgress size={24}/> : null}
            </div>
        );
    };
}
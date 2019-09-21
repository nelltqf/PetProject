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
import "../../css/App.css";
import {Bookmark, BookmarkBorder} from "@material-ui/icons";
import {QuestionsApi} from "../service/QuestionsApi";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";

export class AddQuestionForm extends Component {
    questionsApi = new QuestionsApi();

    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
            category: 0,
            difficulty: 0,
            openDialog: false,
            loading: false
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
        this.setState({
            loading: true
        });
        this.questionsApi.saveQuestion({
            question: this.state.question,
            answer: this.state.answer,
            category: this.state.category,
            difficulty: this.state.difficulty,
        })
            .then(() => {
                // alert("saved")
                console.log('then');
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

    };

    handleClose() {
        this.setState({
            openDialog: false
        })
    }

    categories = () => this.props.categories.map((category, i) => <MenuItem key={i} value={i}>{category}</MenuItem>);

    render() {
        return (
            <div className="vertical-form">
                <Dialog open={this.state.openDialog}
                        onClose={this.handleClose.bind(this)}>
                    <DialogTitle>Some error has occurred</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClose.bind(this)} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
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
                {this.state.loading ? <CircularProgress size={24}/> : null}
            </div>
        );
    };
}
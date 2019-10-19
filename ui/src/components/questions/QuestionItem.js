import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import "./questions.css";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {CodeBlock} from "../service/CodeBlock";
import {Dialog} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

export class QuestionItem extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            showDetails: false,
            isEditable: false,
            id: this.props.questionItem.id,
            questionText: this.props.questionItem.questionText,
            answerText: this.props.questionItem.answerText,
            difficultyId: this.props.questionItem.difficultyId,
            categoryId: this.props.questionItem.categoryId,
        };
    }

    handleChange = fieldName => {
        return event => {
            this.setState({
                [fieldName]: event.target.value
            });
        };
    };

    handleClose = () => {
        this.setState({
            showDetails: false,
            isEditable: false
        })
    };

    editQuestion = () => {
        if (this.state.isEditable) {
            this.props.editQuestion(
                this.state.id,
                this.state.questionText,
                this.state.answerText,
                this.state.difficultyId,
                this.state.categoryId);
        }
        this.setState({isEditable: !this.state.isEditable});
    };

    render() {
        return (
            <>
                <Grid item onClick={() => {
                    this.setState({showDetails: true})
                }}>
                    <ReactMarkdown source={this.props.questionItem.questionText}
                                   escapeHtml={false}
                                   renderers={{code: CodeBlock}}
                    />
                </Grid>
                <Dialog open={this.state.showDetails}
                        onClose={this.handleClose}>
                    <DialogContent>
                        <div className='question-details-dialog'>
                            <Grid item>
                                Difficulty: {this.state.difficultyId}
                            </Grid>
                            {/*Collection*/}
                            <Grid
                                container
                                wrap="nowrap"
                                spacing={2}
                                direction="column">
                                <Grid item>
                                    {this.state.isEditable
                                        ? <TextField className='text-field'
                                                     value={this.state.questionText}
                                                     label="Question"
                                                     multiline
                                                     rowsMax="8"
                                                     variant="filled"
                                                     fullWidth
                                                     onChange={this.handleChange("questionText")}/>
                                        : <ReactMarkdown source={this.state.questionText}
                                                         escapeHtml={false}
                                                         renderers={{code: CodeBlock}}
                                        />
                                    }
                                </Grid>
                                <Grid item>
                                    {this.state.isEditable
                                        ? <TextField className='text-field'
                                                     value={this.state.answerText}
                                                     label="Answer"
                                                     multiline
                                                     rowsMax="8"
                                                     variant="filled"
                                                     fullWidth
                                                     onChange={this.handleChange("answerText")}/>
                                        : <ReactMarkdown source={this.state.answerText}
                                                         escapeHtml={false}
                                                         renderers={{code: CodeBlock}}
                                        />
                                    }
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                wrap="nowrap"
                                direction="row">
                                <Grid item>
                                    <Button variant="outlined" onClick={this.editQuestion}>
                                        {this.state.isEditable ? <CheckIcon/> : <EditOutlinedIcon/>}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={this.props.onClickDelete} variant="outlined">
                                        <DeleteOutlinedIcon/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                        <DialogActions>
                            <Button onClick={this.handleClose}> Close </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
    ;


}
;
import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import "./questions.css";
import Button from "@material-ui/core/Button";
import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {TextBlock} from "../TextBlock";
import {ControlButtonsContainer} from "../../control-buttons/ControlButtonsContainer";

export class QuestionItem extends Component {

    constructor(props) {
        super(props);

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
                <Grid item onClick={() => {this.setState({showDetails: true})}}>
                    <TextBlock isEditable={false}
                               text={this.state.questionText}/>
                </Grid>
                <Dialog open={this.state.showDetails}
                        onClose={this.handleClose}>
                    <DialogContent>
                        <div className='question-details-dialog'>
                            <Grid item>
                                Difficulty: {this.state.difficultyId}
                            </Grid>
                            <Grid container wrap="nowrap" spacing={2} direction="column">
                                <Grid item>
                                    <TextBlock isEditable={this.state.isEditable}
                                               text={this.state.questionText}
                                               onChange={this.handleChange("questionText")}/>
                                </Grid>
                                <Grid item>
                                    <TextBlock isEditable={this.state.isEditable}
                                               text={this.state.answerText}
                                               onChange={this.handleChange("answerText").bind(this)}/>
                                </Grid>
                            </Grid>
                            <ControlButtonsContainer isEditable={this.state.isEditable}
                                                     onClick={this.editQuestion.bind(this)}
                                                     onDelete={this.props.onClickDelete}/>
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

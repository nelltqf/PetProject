import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import "./question-item.css";
import {TextBlock} from "../TextBlock";
import {ControlButtonsContainer} from "../../control-buttons/ControlButtonsContainer";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export class EditQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
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

    difficultyDisplayName = ['Intern', 'Junior', 'Middle', 'Senior'];

    render() {
        let difficultySelect = <Select
            value={this.state.difficultyId}
            onChange={this.handleChange("difficultyId")}
        >
            {this.difficultyDisplayName.map((value, i) => <MenuItem value={i}>{value}</MenuItem>)}
        </Select>;
        return (
            <div className='question-details-dialog'>
                <Grid item>
                    Difficulty:
                    {this.state.isEditable
                        ? difficultySelect
                        : this.difficultyDisplayName[this.state.difficultyId]}
                </Grid>
                <Grid container wrap="nowrap" spacing={2} direction="column">
                    <Grid item>
                        <TextBlock isEditable={this.state.isEditable}
                                   text={this.state.questionText}
                                   label='Question'
                                   onChange={this.handleChange("questionText")}/>
                    </Grid>
                    <Grid item>
                        <TextBlock isEditable={this.state.isEditable}
                                   text={this.state.answerText}
                                   label='Answer'
                                   onChange={this.handleChange("answerText").bind(this)}/>
                    </Grid>
                </Grid>
                <ControlButtonsContainer isEditable={this.state.isEditable}
                                         onClick={this.editQuestion.bind(this)}
                                         onDelete={this.props.onClickDelete}/>
            </div>
        );
    }
    ;


}

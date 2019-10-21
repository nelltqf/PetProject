import React, {Component} from 'react';
import "./question-edit.css"
import {TextBlock} from "../TextBlock";
import {ControlButtonsContainer} from "../../control-buttons/ControlButtonsContainer";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {difficultyDisplayName} from "../../service/DisplayName";

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

    render() {

        let difficultySelect = <Select
            value={this.state.difficultyId}
            onChange={this.handleChange("difficultyId")}
        >
            {difficultyDisplayName.map((value, i) => <MenuItem key={i} value={i}>{value}</MenuItem>)}
        </Select>;

        return (
            <div className='question-edit-dialog'>
                Difficulty
                <span className="difficulty">
                    {this.state.isEditable
                        ? difficultySelect
                        : difficultyDisplayName[this.state.difficultyId]}
                </span>
                <div className="edit-text-field-container">
                    <div className="edit-text-field">
                        <TextBlock isEditable={this.state.isEditable}
                                   text={this.state.questionText}
                                   label='Question'
                                   onChange={this.handleChange("questionText")}/>
                    </div>
                    <div className="edit-text-field">
                        <TextBlock isEditable={this.state.isEditable}
                                   text={this.state.answerText}
                                   label='Answer'
                                   onChange={this.handleChange("answerText").bind(this)}/>
                    </div>
                </div>
                <ControlButtonsContainer isEditable={this.state.isEditable}
                                         onClick={this.editQuestion.bind(this)}
                                         onDelete={this.props.onClickDelete}/>
            </div>
        );
    }
    ;


}

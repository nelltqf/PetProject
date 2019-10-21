import React, {Component} from 'react';
import "./question-item.css";
import Button from "@material-ui/core/Button";
import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {TextBlock} from "../TextBlock";
import Avatar from "@material-ui/core/Avatar";
import {EditQuestion} from "../question-edit/EditQuestion";

export class QuestionItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDetails: false,
        };
    }

    handleClose = () => {
        this.setState({
            showDetails: false,
        })
    };

    render() {
        return (
            <>
                <div className="question-container" onClick={() => {
                    this.setState({showDetails: true})
                }}>
                    <Avatar className="difficulty">{this.props.questionItem.difficultyId}</Avatar>
                    <TextBlock isEditable={false}
                               text={this.props.questionItem.questionText}/>
                </div>
                <Dialog open={this.state.showDetails}
                        onClose={this.handleClose}>
                    <DialogContent>
                        <EditQuestion questionItem={this.props.questionItem}
                                      editQuestion={this.props.editQuestion}
                                      onClickDelete={this.props.onClickDelete}/>
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

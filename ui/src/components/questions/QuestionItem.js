import React from 'react';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import "../../css/App.css";
import Button from "@material-ui/core/Button";

export const QuestionItem = (props) => {

    let answerText = props.questionItem.answer.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
    });
    let answer = props.showAnswer ? <Typography>{answerText}</Typography> : null;
    let buttonText = props.showAnswer ? "Hide answer" : "Show answer";

    return (
        <div>
            <Grid
                container
                direction="row">
                <Avatar className="avatar">{props.questionItem.difficulty}</Avatar>
                <Typography>{props.questionItem.question}</Typography>
            </Grid>
            <Button onClick={props.onClick}>{buttonText}</Button>
            {answer}
        </div>
    );
};
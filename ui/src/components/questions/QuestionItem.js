import React from 'react';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import "./Questions.css";
import Button from "@material-ui/core/Button";

export const QuestionItem = (props) => {

    let answer = props.showAnswer ? <Typography>{props.questionItem.answer}</Typography> : null;
    let buttonText = props.showAnswer ? "Hide answer" : "Show answer";

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Avatar className="avatar">{props.questionItem.difficulty}</Avatar>
                <Typography>{props.questionItem.question}</Typography>
            </Grid>
            <Button onClick={props.onClick}>{buttonText}</Button>
            {answer}
        </div>
    );
};
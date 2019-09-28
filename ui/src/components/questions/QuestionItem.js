import React from 'react';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import "../../css/App.css";
import Button from "@material-ui/core/Button";

export const QuestionItem = (props) => {
    let answerBlock = null;

    if (props.questionItem.answerText) {
        let answerText = props.questionItem.answerText.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
        });

        answerBlock = <div>
            <Button onClick={props.onClick}>{props.showAnswer ? "Hide answer" : "Show answer"}</Button>
            {props.showAnswer ? <Typography>{answerText}</Typography> : null}
        </div>;
    }

    return (
        <div>
            <Grid
                container
                wrap="nowrap"
                spacing={2}
                direction="row">
                <Grid item>
                    <Avatar className="avatar">{props.questionItem.difficultyId}</Avatar>
                </Grid>
                <Grid item>
                    <Typography>{props.questionItem.questionText}</Typography>
                </Grid>
                <Grid item>
                    <Button onClick={props.onClickDelete} variant="outlined">x</Button>
                </Grid>
            </Grid>
            {answerBlock}
        </div>
    );
};
import React from 'react';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import "../../css/App.css";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "../service/CodeBlock";

export const QuestionItem = (props) => {
    let answerBlock = null;

    if (props.questionItem.answerText) {
        answerBlock = <div className="answer">
            <Button onClick={props.onClick}>{props.showAnswer ? "Hide answer" : "Show answer"}</Button>
            {props.showAnswer
                ? <ReactMarkdown source={props.questionItem.answerText}
                                 escapeHtml={false}
                                 renderers={{code: CodeBlock}}
                />
                : null}
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
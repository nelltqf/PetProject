import React from 'react';
import {Typography} from "@material-ui/core";

export const QuestionItem = (props) => {

    return <div>
        <Typography>{props.questionItem.question}</Typography>
        <Typography>{props.questionItem.answer}</Typography>
    </div>;

};
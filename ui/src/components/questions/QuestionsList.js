import React from 'react';
import List from "@material-ui/core/List";
import "./Questions.css";
import ListItem from "@material-ui/core/ListItem";

export const QuestionsList = (props) => {

    let questions = ["Q1", "Q2", "Q3"];

    let questionItems = questions.map((question, i) => {
        return (
            <ListItem key={i} >
                    {question}
            </ListItem>
        )
    });

    return <div className="list"><List>{questionItems}</List></div>;

};
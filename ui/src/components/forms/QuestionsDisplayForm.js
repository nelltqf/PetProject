import React from 'react';
import {CategoriesList} from "../categories/CategoriesList";
import {QuestionsList} from "../questions/QuestionsList";
import "../../css/App.css";

export const QuestionsDisplayForm = (props) => {

    return <div className="horizontal-form">
        <CategoriesList categories={props.categories}
                        currentCategory={props.currentCategory}
                        selectCategory={props.selectCategory}/>
        <QuestionsList currentCategory={props.currentCategory}/>
    </div>
};
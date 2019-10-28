import React from 'react';
import {CategoriesList} from "../category/category-list/CategoriesList";
import {QuestionsList} from "../question/question-list/QuestionsList";
import "../../css/App.css";

export const QuestionsListContainer = (props) => {

    return <div className="horizontal-form">
        <CategoriesList categories={props.categories}
                        currentCategory={props.currentCategory}
                        selectCategory={props.selectCategory}
                        editCategories={props.editCategories}/>
        <QuestionsList currentCategory={props.currentCategory}/>
    </div>
};
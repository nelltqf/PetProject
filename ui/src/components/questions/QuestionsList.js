import React, {Component} from 'react';
import List from "@material-ui/core/List";
import "../../css/App.css";
import ListItem from "@material-ui/core/ListItem";
import {QuestionItem} from "./QuestionItem";
import {QuestionsApi} from "../service/QuestionsApi";

export class QuestionsList extends Component {
    questionsApi = new QuestionsApi();

    constructor(props) {
        super(props);

        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        this.fetchQuestions(this.props.currentCategory);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchQuestions(nextProps.currentCategory);
        if (this.props.currentCategory !== nextProps.currentCategory) {
            this.setState({
                selectedQuestion: null
            })
        }
    }

    fetchQuestions(categoryId) {
        this.questionsApi.fetchQuestions(categoryId)
            .then(response => {
                this.setState({
                    questions: response
                });
            })
            .catch(error => console.error(error));
    }

    deleteQuestion = (question, i) => {
        this.questionsApi.deleteQuestion(question.id)
            .then(() => {
                let newQuestions = [...this.state.questions];
                newQuestions.splice(i, 1);
                this.setState({questions: newQuestions});
            })
            .catch(error => console.error(error));
    };

    setSelectedQuestion(i) {
        let selected = i;
        if (this.state.selectedQuestion === i) {
            selected = null;
        }
        this.setState({
            selectedQuestion: selected
        })
    }

    questionItems = () => this.state.questions.map((question, i) => {
        return (
            <ListItem key={i}>
                <QuestionItem questionItem={question}
                              onClick={() => this.setSelectedQuestion(i)}
                              onClickDelete={() => this.deleteQuestion(question, i)}
                              showAnswer={i === this.state.selectedQuestion}/>
            </ListItem>
        )
    });

    render() {
        return <div className="list"><List component="nav">{this.questionItems()}</List></div>;
    }
}
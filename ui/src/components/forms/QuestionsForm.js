import React, {Component} from 'react';
import {AddQuestionForm} from "./AddQuestionForm";
import "../../css/App.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {QuestionsDisplayForm} from "./QuestionsDisplayForm";
import {BrowserRouter as Router} from "react-router-dom";
import {QuestionsApi} from "../service/QuestionsApi";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export class QuestionsForm extends Component {
    questionsApi = new QuestionsApi();

    constructor(props) {
        super(props);

        this.state = {
            currentCategory: 1,
            categories: [],
            tab: 0,
            showCategoriesDialog: false,
        };
    }

    componentDidMount() {
        this.questionsApi.fetchCategories()
            .then(response => {
                console.log(response);
                this.setState({
                        categories: response
                    }
                )
            });
    }

    selectCategory = (category) => {
        this.setState({
            currentCategory: category
        })
    };

    editCategories = () => {
        this.setState({
            showCategoriesDialog: true,
            newCategory: ""
        })
    };

    handleClose() {
        this.setState({
            showCategoriesDialog: false,
            newCategory: ""
        })
    }

    handleChange = fieldName => {
        return event => {
            this.setState({
                [fieldName]: event.target.value
            });
        };
    };

    addNewCategory = () => {
        if (this.state.newCategory) {
            this.questionsApi.addCategory({name: this.state.newCategory})
                .then(response => {
                    let newCategories = [...this.state.categories];
                    newCategories.push(response);
                    this.setState({
                        categories: newCategories,
                        newCategory: ""
                    })
                });
        }
    };

    deleteCategory = categoryId => {
        this.questionsApi.deleteCategory(categoryId)
            .then(() => {
                let newCategories = this.state.categories.filter(category => category.id !== categoryId);
                this.setState({
                    categories: newCategories,
                });
            });
    };

    selectTab(event, tab) {
        this.setState({
            tab: tab
        })
    }

    render() {
        let elements = {
            0: <QuestionsDisplayForm categories={this.state.categories}
                                     currentCategory={this.state.currentCategory}
                                     selectCategory={this.selectCategory}
                                     editCategories={this.editCategories}/>,
            1: <AddQuestionForm categories={this.state.categories}/>,
            2: <p>Account</p>
        };
        return <Router>
            <div className="root">
                <Dialog open={this.state.showCategoriesDialog}
                        onClose={this.handleClose.bind(this)}>
                    <DialogTitle>Edit categories</DialogTitle>


                    {this.state.categories.map((category, i) => {
                        return <Grid container key={i}>
                            <Grid item>{category.name}</Grid>
                            <Button>Edit</Button>
                            <Button onClick={() => this.deleteCategory(category.id)}>Delete</Button>
                        </Grid>
                    })}

                    <Grid container>
                        <TextField value={this.state.newCategory} onChange={this.handleChange("newCategory")}/>
                        <Button onClick={this.addNewCategory}>Add</Button>
                    </Grid>

                    <DialogActions>
                        <Button onClick={this.handleClose.bind(this)} color="primary">
                            Done
                        </Button>
                    </DialogActions>
                </Dialog>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.tab}
                        onChange={this.selectTab.bind(this)}
                    >
                        <Tab value={0} label="Questions"/>
                        <Tab value={1} label="Add question"/>
                        <Tab value={2} label="Account"/>
                    </Tabs>
                </AppBar>
                {elements[this.state.tab]}
            </div>
        </Router>
    }
}
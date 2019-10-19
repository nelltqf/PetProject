import React, {Component} from 'react';
import {AddQuestionForm} from "../question/question-add/AddQuestionForm";
import "../../css/App.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {QuestionsListContainer} from "./QuestionsListContainer";
import {QuestionsApi} from "../service/QuestionsApi";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import {EditCategoriesList} from "../category/category-edit/EditCategoriesList";
import {ErrorDialog} from "../service/ErrorDialog";

export class QuestionsContainer extends Component {
    questionsApi = new QuestionsApi();

    constructor(props) {
        super(props);

        this.state = {
            currentCategory: null,
            categories: [],
            tab: 0,
            showCategoriesDialog: false,
            openError: false
        };
    }

    componentDidMount() {
        this.questionsApi.fetchCategories()
            .then(response => {
                console.log(response);
                this.setState({
                        categories: response,
                        currentCategory: response[0] && response[0].id
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
            showCategoriesDialog: true
        })
    };

    handleClose() {
        this.setState({
            showCategoriesDialog: false,
            openError: false
        })
    }

    addNewCategory = (newCategory) => {
        if (newCategory) {
            this.questionsApi.addCategory({name: newCategory})
                .then(response => {
                    let newCategories = [...this.state.categories];
                    newCategories.push(response);
                    this.setState({
                        categories: newCategories
                    })
                });
        }
    };

    deleteCategory = categoryId => {
        this.questionsApi.deleteCategory(categoryId)
            .then(() => {
                let newCategories = this.state.categories.filter(category => category.id !== categoryId);
                let newCurrentCategory = this.state.currentCategory;
                if (this.state.currentCategory === categoryId) {
                    newCurrentCategory = newCategories[0].id;
                }
                this.setState({
                    categories: newCategories,
                    currentCategory: newCurrentCategory
                });
            }).catch(error => {
            this.setState({openError: true});
        });
    };

    editCategory = (categoryId, categoryName) => {
        this.questionsApi.editCategory({id: categoryId, name: categoryName})
            .then(() => {
                let newCategories = [...this.state.categories];
                newCategories.forEach(category => {
                    if (category.id === categoryId) {
                        category.name = categoryName;
                    }
                });
                this.setState({
                    categories: newCategories
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
            0: <QuestionsListContainer categories={this.state.categories}
                                       currentCategory={this.state.currentCategory}
                                       selectCategory={this.selectCategory}
                                       editCategories={this.editCategories}/>,
            1: <AddQuestionForm categories={this.state.categories}/>
        };
        return <div className="root">
            <ErrorDialog isOpen={this.state.openError}
                         handleClose={this.handleClose.bind(this)}
                         title="Cannot delete category">
                This category cannot be removed. Try removing all questions from the category first.
            </ErrorDialog>

            <Dialog open={this.state.showCategoriesDialog}
                    onClose={this.handleClose.bind(this)}>
                <DialogTitle>Edit categories</DialogTitle>
                <EditCategoriesList categories={this.state.categories}
                                    deleteCategory={this.deleteCategory.bind(this)}
                                    editCategory={this.editCategory.bind(this)}
                                    addNewCategory={this.addNewCategory.bind(this)}/>
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
                </Tabs>
            </AppBar>
            {elements[this.state.tab]}
        </div>
    }
}
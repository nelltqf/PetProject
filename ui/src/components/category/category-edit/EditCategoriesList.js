import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import './edit-categories.css';
import {EditCategory} from ".//EditCategory";

export class EditCategoriesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newCategory: ""
        };
    }

    handleChange = fieldName => {
        return event => {
            this.setState({
                [fieldName]: event.target.value
            });
        };
    };

    addNewCategory() {
        this.props.addNewCategory(this.state.newCategory);
        this.setState({
            newCategory: ""
        })
    }

    render() {
        return <div className='edit-category'>
            {
                this.props.categories.map((category, i) => {
                    return (
                        <EditCategory key={i}
                                      category={category}
                                      editCategory={this.props.editCategory}
                                      deleteCategory={this.props.deleteCategory}/>
                    );
                })
            }
            <Grid container className='text-field-container'>
                <TextField className='text-field' value={this.state.newCategory}
                           onChange={this.handleChange("newCategory")}/>
                <Button variant="outlined" onClick={() => this.addNewCategory()}>Add</Button>
            </Grid>
        </div>;
    }
}
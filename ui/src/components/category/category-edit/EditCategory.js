import React, {Component} from 'react';
import './edit-categories.css';
import {TextField} from "@material-ui/core";
import {ControlButtonsContainer} from "../../control-buttons/ControlButtonsContainer";

export class EditCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryName: this.props.category.name,
            isEditable: false
        };
    }

    handleChange = fieldName => {
        return event => {
            this.setState({
                [fieldName]: event.target.value
            });
        };
    };

    editCategoryName = () => {
        if (this.state.isEditable) {
            this.props.editCategory(this.props.category.id, this.state.categoryName);
        }
        this.setState({isEditable: !this.state.isEditable});
    };

    deleteCategory = () => {
        this.props.deleteCategory(this.props.category.id);
    };

    render() {
        return (
            <div className='category-item'>
                <div>{this.state.isEditable
                    ? <TextField className="text-field"
                                 value={this.state.categoryName}
                                 onChange={this.handleChange("categoryName")}/>
                    : this.state.categoryName}</div>
                <ControlButtonsContainer isEditable={this.state.isEditable}
                                         onClick={this.editCategoryName}
                                         onDelete={this.deleteCategory}/>
            </div>
        );
    }
}
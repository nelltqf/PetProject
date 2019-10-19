import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CheckIcon from '@material-ui/icons/Check';
import './edit-categories.css';
import {TextField} from "@material-ui/core";

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

    render() {
        return (
            <div className='category-item'>
                <div>{this.state.isEditable
                    ? <TextField className="text-field"
                                 value={this.state.categoryName}
                                 onChange={this.handleChange("categoryName")}/>
                    : this.state.categoryName}</div>
                <div className='control-buttons'>
                    <Button variant="outlined" onClick={this.editCategoryName}>
                        {this.state.isEditable ? <CheckIcon/> : <EditOutlinedIcon/>}
                    </Button>
                    <Button onClick={() => this.props.deleteCategory(this.props.category.id)} variant="outlined">
                        <DeleteOutlinedIcon/>
                    </Button>
                </div>
            </div>
        );
    }
}
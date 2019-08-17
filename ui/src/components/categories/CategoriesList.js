import React, {Component} from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import {BASE_URL} from "../Constants";

export class CategoriesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        fetch(`${BASE_URL}/categories`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState({
                    categories: response
                });
            })
            .catch(error => console.error(error));
    }

    getMenuItems = () => this.state.categories.map((category, i) => {
        return (
            <div>
                <MenuItem selected={i === this.props.currentCategory}
                          key={i}
                          onClick={() => this.props.selectCategory(i)}>
                    {category}
                </MenuItem>
            </div>
        )
    });

    render() {
        return <MenuList>{this.getMenuItems()}</MenuList>;
    };
}
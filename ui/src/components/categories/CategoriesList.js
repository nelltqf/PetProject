import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Button from "@material-ui/core/Button";

export const CategoriesList = (props) => {

    const getMenuItems = props.categories.map((category, i) => {
        return (
            <MenuItem selected={i === props.currentCategory}
                      key={i}
                      onClick={() => props.selectCategory(category.id)}>
                {category.name}
            </MenuItem>
        )
    });

    return <div>
        <MenuList>{getMenuItems}</MenuList>
        <Button variant="contained" color="primary" onClick={() => props.editCategories()}>Edit</Button>
    </div>;
};
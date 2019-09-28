import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

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

    return <MenuList>{getMenuItems}</MenuList>;
};
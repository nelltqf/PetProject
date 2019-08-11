import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

export const CategoriesList = (props) => {

    let categories = ["Java Core", "Collections", "Exceptions"];

    let menuItems = categories.map((category, i) => {
        return (
            <div>
                <MenuItem selected={i === props.currentCategory}
                          key={i}
                          onClick={() => props.selectCategory(i)}>
                    {category}
                </MenuItem>
            </div>
        )
    });

    return <MenuList>{menuItems}</MenuList>;

};
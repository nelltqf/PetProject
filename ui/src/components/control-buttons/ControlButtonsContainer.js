import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import React from "react";

export const ControlButtonsContainer = (props) => {
    return <div className='control-buttons'>
        <Button variant="outlined" onClick={props.onClick}>
            {props.isEditable ? <CheckIcon/> : <EditOutlinedIcon/>}
        </Button>
        <Button onClick={props.onDelete} variant="outlined">
            <DeleteOutlinedIcon/>
        </Button>
    </div>;
};
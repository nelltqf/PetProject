import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/core/SvgIcon/SvgIcon";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import React from "react";

export const StateButtonsContainer = (props) => {
    return <Grid
        container
        wrap="nowrap"
        direction="row">
        <Grid item>
            <Button variant="outlined" onClick={props.editQuestion}>
                {props.isEditable ? <CheckIcon/> : <EditOutlinedIcon/>}
            </Button>
        </Grid>
        <Grid item>
            <Button onClick={props.onClickDelete} variant="outlined">
                <DeleteOutlinedIcon/>
            </Button>
        </Grid>
    </Grid>;
};
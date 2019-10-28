import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


export const ErrorDialog = (props) => {
    return <Dialog open={props.isOpen}
                   onClose={props.handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.children}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleClose} color="primary" autoFocus>
                OK
            </Button>
        </DialogActions>
    </Dialog>;
};
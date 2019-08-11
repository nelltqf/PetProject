import React from 'react';
import {TextField} from "@material-ui/core";

export const AddQuestionForm = (props) => {
    return (
        <div className="vertical-form">
            <TextField label="Title"
                       margin="dense"
                       variant="outlined"
                       // value={props.valueObject.title}
                       // onChange={props.updateTitle}
            />
            <TextField label="Description"
                       margin="dense"
                       variant="outlined"
                       multiline rows="10"
                       // value={props.valueObject.description}
                       // onChange={props.updateDescription}
            />
        </div>
    );
};
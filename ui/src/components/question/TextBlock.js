import React from "react";
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "../service/CodeBlock";
import TextField from "@material-ui/core/TextField";

export const TextBlock = (props) => {
    return <>{props.isEditable
        ? <TextField className='text-field'
                     value={props.text}
                     label={props.label}
                     multiline
                     rowsMax="8"
                     variant="outlined"
                     fullWidth
                     onChange={props.onChange}/>
        : <>
            <strong>{props.label}</strong>
            <ReactMarkdown source={props.text}
                           escapeHtml={false}
                           renderers={{code: CodeBlock}}
            />
        </>
             }
    </>;
};
import React from "react";
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "../service/CodeBlock";
import TextField from "@material-ui/core/TextField";

export const TextBlock = (props) => {
    return <>{props.isEditable
        ? <TextField className='text-field'
                     value={props.text}
                     label="Question"
                     multiline
                     rowsMax="8"
                     variant="filled"
                     fullWidth
                     onChange={props.onChange}/>
        : <ReactMarkdown source={props.text}
                         escapeHtml={false}
                         renderers={{code: CodeBlock}}
        />
    }
    </>;
};
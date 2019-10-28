import React, {Component} from "react";
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import sql from 'highlight.js/lib/languages/sql';
import java from 'highlight.js/lib/languages/java';

// https://github.com/rexxars/react-markdown/blob/master/demo/src/code-block.js
export class CodeBlock extends Component {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this)
    }

    componentDidMount() {
        hljs.registerLanguage('javascript', javascript);
        hljs.registerLanguage('sql', sql);
        hljs.registerLanguage('java', java);
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        hljs.highlightBlock(this.code);
    }

    setRef(codeBlock) {
        this.code = codeBlock;
    }

    render() {
        return (
            <pre>
                <code ref={this.setRef} className={`${this.props.language}`}>
                  {this.props.value}
                </code>
            </pre>
        )
    }
}
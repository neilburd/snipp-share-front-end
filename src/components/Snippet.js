import React, {Component} from 'react';
import SnippetForm from './SnippetForm';
import CodeMirror from 'react-codemirror';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/addon/display/placeholder');

class Snippet extends Component {

  render(){
    var options = {
        lineNumbers: true,
        readOnly: true
    }
    /// for use on a button to reveal the snippet edit form// Do I need this?
    if (this.props.editedSnpippetId === this.props.snippet.id){
      return (
        <SnippetForm
          autoFocus={ true }
          buttonName="Update Snippet"
          onSnippetAction={this.props.onUpdateSnippet}/>
      )
    }
    return(
      ////I Nedd to figure out what I need here. I will put in this code for now but will replace it in the future.
      <div>
        <p>{this.props.snippet.title}</p>
        <p>{this.props.snippet.language}</p>
        <CodeMirror
          name="code"
          ref="snippet"
          options={options}
          value={this.props.snippet.code}
          onChange={(e) => this.editorOnChange(e)}
          />
      </div>
    )
  }
}

export default Snippet

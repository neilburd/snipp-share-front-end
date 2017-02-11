import React, {Component} from 'react'
import CodeMirror from 'react-codemirror';
import update from 'immutability-helper';
import Panel from 'react-bootstrap/lib/Panel';



require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/addon/display/placeholder');
require('codemirror/theme/material.css');

class CreateSnippetForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      snippet:{
        title:'',
        code:'',
        language:''
      }
    }
    //this.editorOnChange = this.editorOnChange.bind(this)
  }

  onInputChange(propertyName, event){
    let snippet = this.state.snippet
    snippet[propertyName] = event.target.value
    this.setState({
      snippet: snippet
    })
  }

  editorOnChange(newValue){
    // let snippet = this.state.snippet
    this.setState({
      snippet: update(this.state.snippet, {
        code: { $set: newValue }
      })
    })
    // console.log(this.state.snippet);
  }

  onFormSubmit(event){
    event.preventDefault()
    let snippet = this.state.snippet
    this.props.createSnippet(snippet);
    // console.log(this.state.snippet);
    this.setState({
      snippet: update(this.state.snippet, {
        title:    { $set: '' },
        code:     { $set: '' },
        language: { $set: '' }
      })
    })
    // console.log(this.state.snippet);
  }
  render(){
    var options = {
        lineNumbers: true,
        placeholder: "paste your snippet here...",
        theme: 'material'
    }
    return(
      /// This is where I will put the CodeMirror
      <div className='createForm todoForm snippetContainer'>
        <h2>New Snippet</h2>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            name='title'
            onChange={event => this.onInputChange('title', event)}
            placeholder='Paste title here ...'
            type='text'
            value={this.state.snippet.title}
            />
          <input
            name='language'
            onChange={event => this.onInputChange('language', event)}
            placeholder='Paste Snippet here ...'
            type='text'
            value={this.state.snippet.language}
            />
          <button type='submit'>Create Snippet!</button>
          <CodeMirror
            name="code"
            ref="snippet"
            options={options}
            value={this.state.snippet.code}
            onChange={(e) => this.editorOnChange(e)}
             />
        </form>
      </div>
    )
  }
}

export default CreateSnippetForm

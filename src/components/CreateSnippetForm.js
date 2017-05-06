import React, {Component} from 'react'
import CodeMirror from 'react-codemirror';
import update from 'immutability-helper';
import '../App.css';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


require('codemirror/lib/codemirror.css');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/python/python');
require('codemirror/mode/css/css');
require('codemirror/mode/coffeescript/coffeescript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/php/php');
require('codemirror/mode/sass/sass');
require('codemirror/mode/vue/vue');

require('codemirror/addon/display/placeholder');
require('codemirror/theme/monokai.css');

class CreateSnippetForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      snippet:{
        title:'',
        code:'',
        language:'javascript'
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
    console.log(this.state.snippet.language);
  }
  render(){
    /// setting a varialbe to the snippets.language so I can change the language mode on the editor
    let lang = this.state.snippet.language
    var options = {
        lineNumbers: true,
        placeholder: "paste your snippet here...",
        theme: 'monokai',
        mode: lang
    }
    return(
      /// This is where I will put the CodeMirror
      <div>
        <Grid>
            <form onSubmit={event => this.onFormSubmit(event)}>
              <FormGroup>
                <Row>
                  <Col xs={11} md={11}>
                    <ControlLabel>Title of your new snippet</ControlLabel>
                    <FormControl
                      name='title'
                      onChange={event => this.onInputChange('title', event)}
                      placeholder='Title here ...'
                      type='text'
                      value={this.state.snippet.title}
                      />
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} md={9} >
                    <div className='formSelect'>
                    <ControlLabel>Please Choose a Language </ControlLabel>
                    <FormControl
                      componentClass="select"
                      name='language'
                      onChange={event => this.onInputChange('language', event)}
                      type='text'
                      value={this.state.snippet.language}
                      >
                        <option value="javascript">javascript</option>
                        <option value="ruby">ruby</option>
                        <option value="markdown">markdown</option>
                        <option value="xml">xml</option>
                        <option value="python">python</option>
                        <option value="css">css</option>
                        <option value="coffeescript">coffeescript</option>
                        <option value="jsx">jsx</option>
                        <option value="php">php</option>
                        <option value="sass">sass</option>
                        <option value="vue">vue</option>
                    </FormControl>
                    </div>
                  </Col>
                  <Col xs={2} md={2} >
                    <Button
                      className='formButton'
                      bsStyle="primary"
                      type='submit'
                      >
                      Create Snippet!
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={10} md={11}>
                    <CodeMirror
                      className='editor'
                      name="code"
                      ref="snippet"
                      options={options}
                      value={this.state.snippet.code}
                      onChange={(e) => this.editorOnChange(e)}
                       />
                   </Col>
                </Row>
             </FormGroup>
          </form>
        </Grid>
      </div>
    )
  }
}

export default CreateSnippetForm

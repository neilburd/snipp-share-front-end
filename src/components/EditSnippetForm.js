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

class EditSnippetForm extends Component{

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
  render(){
    /// setting a varialbe to the snippets.language so I can change the language mode on the editor
    // possibly used for a sort function
    let lang = this.props.snippet.language;
    var options = {
        lineNumbers: true,
        placeholder: "paste your snippet here...",
        theme: 'monokai',
        //mode: lang
    }
    return(
      <div>
        <Grid>
            <form onSubmit={event => this.onFormSubmit(event)}>
              <FormGroup>
                <Row>
                  <Col xs={11} md={7}>
                    <ControlLabel>Edit the {this.props.snippet.title}</ControlLabel>
                    <FormControl
                      name='title'
                      type='text'
                      onChange={event => this.onInputChange('title', event)}
                      value={(this.state && this.state.snippet.title) || ''}
                      />
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} md={5} >
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
                    <a href="">
                      <Button
                        className='formButton'
                        bsStyle="primary"
                        type='submit'
                        >
                        Create Snippet!
                      </Button>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={7}>
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

export default EditSnippetForm

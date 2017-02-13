import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Label from 'react-bootstrap/lib/Label';
//import update from 'immutability-helper';
import ClipboardButton from 'react-clipboard.js';

// require('../Snippet.css');
require('codemirror/theme/monokai.css');

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

require('codemirror/theme/monokai.css');

class Snippet extends Component {

  onChange(newValue, Id) {
    console.log(this.props.snippet);
    console.log(newValue);//the new value of the things
    console.log(Id);
    this.props.editThisSnippet(newValue);

  }

  editorOnChange(newValue){
    // let snippet = this.state.snippet
    this.props.editThisSnippet(newValue);

  }

  render(){
    let lang = this.props.snippet.language
    let edit = this.props.editSnippet
    let buttonText = "Edit Snippet"
    var options = {
        lineNumbers: true,
        readOnly: !edit,
        theme: 'monokai',
        mode: lang
    }
    if (edit === true){
      buttonText = 'Save Changes';

    }
    return(
      ////I Nedd to figure out what I need here. I will put in this code for now but will replace it in the future.
      <Grid>
        <Row>
          <Col sm={1} md={2}>
            <div>
              <h4>{this.props.snippet.title}</h4>
              <Label className={lang}>
                {this.props.snippet.language}
              </Label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={3} md={3} >
            <div>
              <CodeMirror
                key={this.props.snippet.code}
                className='marginTop sideEditor'
                name="code"
                ref="snippet"
                height='200px'
                options={options}
                value={this.props.snippet.code}
                onChange={e => this.onChange(e, this.props.snippet.id)}
                />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={1}>
            <ClipboardButton className="btn btn-success btn-sm marginTop" data-clipboard-text={this.props.snippet.code}>
                copy snippet
            </ClipboardButton>
          </Col>

          <Col sm={1} md={1}>
            <div>
              <Button
                bsStyle="info"
                bsSize="small"
                className="marginTop"
                onClick={() => this.props.updateSnippet(this.props.snippet)}
                >
                {buttonText}
              </Button>
            </div>
          </Col>
          <Col sm={1} md={1}>
            <div>
              <Button
                className="marginTop"
                bsStyle="danger"
                bsSize="small"
                onClick={() => this.props.onDeleteSnippet(this.props.snippet)}>
                Delete Snippet
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Snippet

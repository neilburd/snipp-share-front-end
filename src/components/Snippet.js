import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Label from 'react-bootstrap/lib/Label';

// require('../Snippet.css');
require('codemirror/theme/monokai.css');

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
    return(
      ////I Nedd to figure out what I need here. I will put in this code for now but will replace it in the future.
      <Grid>
        <Row>
          <Col sm={1} md={2}>
            <div>
              <h4>{this.props.snippet.title}</h4>
              <Label>
                {this.props.snippet.language}
              </Label>
            </div>
          </Col>
          <Col sm={1} md={1}>
            <div>
              <Button bsStyle="info" bsSize="small" className='editSnippetButton'>
                Edit Snippet!
              </Button>
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
                onChange={(e) => this.editorOnChange(e)}
                />
              <Button
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

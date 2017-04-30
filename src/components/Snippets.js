import React, {Component} from 'react'
import Snippet from './Snippet'
import SnippetSort from './SnippetSort'

import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Snippets extends Component {
  constructor(){
    super()
    this.state = {
      sortLang: 'allSnippets'
    };
  }

  render(){
    var allSnippets = this.props.snippets.map(function(snippet, index){
      return(
          <Col sm={12} md={4}  key={snippet.id}>
            <Panel key={snippet.id} >
              <Snippet
                key={snippet.id}
                snippet={snippet}
                onDeleteSnippet={this.props.onDeleteSnippet}
                updateSnippet={this.props.updateSnippet}
                editThisSnippet={this.props.editThisSnippet}
                editSnippet={this.props.editSnippet}
              />
            </Panel>
          </Col>
      )
  },this)
    return(

        <div>
          <SnippetSort
            />
          { allSnippets }
        </div>
    )
  }
}

export default Snippets

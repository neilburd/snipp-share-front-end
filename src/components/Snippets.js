import React, {Component} from 'react'
import Snippet from './Snippet'
import SnippetList from './SnippetList'

import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';

class Snippets extends Component {

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

          { allSnippets }

        </div>
    )
  }
}

export default Snippets

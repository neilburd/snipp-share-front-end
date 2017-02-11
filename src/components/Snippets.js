import React, {Component} from 'react'
import Snippet from './Snippet'

require('../App.css');

class Snippets extends Component {

  render(){
    var allSnippets = this.props.snippets.map(function(snippet, index){
      return(
          <Snippet
            key={snippet.id}
            snippet={snippet}
          />
          // onDeleteSnippet={this.props.onDeleteSnippet}
          // receiveState={this.props.onReceiveState}
          // editedSnpippetId={this.props.editedSnpippetId}
          // onUpdateSnippet={this.props.onUpdateSnippet}
      )
    },this)
    return(

      <div className="snippetContainer">
        <div className="snippets incomplete col-md-6">
          <h2>Snippets</h2>
          {allSnippets}
        </div>
      </div>

    )
  }
}

export default Snippets

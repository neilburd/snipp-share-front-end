import React, {Component} from 'react'
import Snippet from './Snippet'

class Snippets extends Component {
  render(){
    var snippets = this.props.snippets.map(function(snippet, index){
      return(
        <Snippet
          key={snippet.id}
          snippet={snippet}
          onDeleteSnippet={this.props.onDeleteSnippet}
          receiveState={this.props.onReceiveState}
          editedSnpippetId={this.props.editedSnpippetId}
          onUpdateSnippet={this.props.onUpdateSnippet}
        />
      )
    }, this)
    ///dont need the completed logic
  }
}

export default Snippets

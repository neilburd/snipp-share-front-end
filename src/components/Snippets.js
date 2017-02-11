import React, {Component} from 'react'
import Snippet from './Snippet'


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

        <div>
          <h2>Snippets</h2>
          {allSnippets}
        </div>



    )
  }
}

export default Snippets

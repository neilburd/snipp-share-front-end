import React, {Component} from 'react'
import Snippet from './Snippet'
import Panel from 'react-bootstrap/lib/Panel';


class Snippets extends Component {

  render(){
    let title = "all-snippets"
    var allSnippets = this.props.snippets.map(function(snippet, index){
      return(
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
          // onDeleteSnippet={this.props.onDeleteSnippet}
          // receiveState={this.props.onReceiveState}
          // editedSnpippetId={this.props.editedSnpippetId}
          // onUpdateSnippet={this.props.onUpdateSnippet}
      )
    },this)
    return(

        <div>
          <h2 className="title monospace">{title}</h2>
          {allSnippets}
        </div>



    )
  }
}

export default Snippets

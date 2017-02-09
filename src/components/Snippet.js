import React, {Component} from 'react';
import SnippetForm from './SnippetForm';

class Snippet extends Component {
  render(){
    /// for use on a button to reveal the snippet edit form// Do I need this?
    if (this.props.editedSnpippetId === this.props.snippet.id){
      return (
        <SnippetForm
          autoFocus={ true }
          buttonName="Update Snippet"
          onSnippetAction={this.props.onUpdateSnippet}/>
      )
    }
    return(
      ////I Nedd to figure out what I need here. I will put in this code for now but will replace it in the future.
      <p data-snippets-index={this.props.snippet.id}>
        <span onClick={() => this.props.receiveState(tis.props.snippet)}>{this.props.snippet.body}</span>
        <span className='toggleButton' onClick={() => this.props.onUpdateStatus(this.props.snippet)}>&#10004;</span>
        <span className='deleteButton' onClick={() => this.props.onDeleteSnippet(this.props.snippet)}>X</span>
      </p>
    )
  }
}

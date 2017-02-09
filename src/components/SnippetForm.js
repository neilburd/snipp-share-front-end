import React, {Component} from 'react'

class SnippetForm extends Component {
  onChange(event) {
    this.setState({
      snippet: event.target.value
    })
  }
  onSubmit(event) {
    event.preventDefault()
    var snippet = this.state.snippet
    this.props.onSnippetAction(snippet)
    this.setState({
      todo: ""
    })
  }
  render(){
    return (
      <div className="snippetForm">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            autoFocus={this.props.autoFocus}
            onChange={e => this.onChange(e)}
            placeholder='paste your code here'
            type='text'
            value={(this.state && this.state.snippet) || ''} />
          <button
            type='submit'>
            {this.props.buttonName}
          </button>
        </form>
      </div>
    )
  }
}

export default SnippetForm

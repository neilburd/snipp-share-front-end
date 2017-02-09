import React, {Component} from 'react'

class CreateSnippetForm extends Component{
  constructor(){
    super()
    this.state = {
      snippet: ''
    }
  }
  onInputChange(event){
    this.setState({
      snippet: event.taget.value
    })
  }
  onformSubmit(event){
    event.preventDefault()
    let snippet = this.state.snippet
    this.props.createTodo(todo)
    this.setState({
      snippet:""
    })
  }
  onSubmit(event){
    event.preventDefault()
    let snippet = this.state.snippet
    this.props.createSnippet(snippet)
    this.setState({
      todo:""
    })
  }
  render(){
    return(
      /// This is where I will put the CodeMirror
      <div className='createForm todoForm'>
        <h2>Create a Snippet</h2>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='paste in you code'
            type='text'
            value={this.state.snippet} />
          <button type='submit'>
            Create A Snippet!
          </button>
        </form>
      </div>
    )
  }
}

export default CreateSnippetForm

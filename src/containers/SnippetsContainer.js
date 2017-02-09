import React, { Component } from 'react';
import Snippets from '../components/Snippets'
import CreateSnippetForm from '../components/CreateSnippetForm';
import SnippetModel from '../models/Snippet';

class SnippetsContainer extends Component{
  constructor(){
    super()
    this.state = {
      snippets: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    SnippetModel.all().then(function(res){
      this.setState ({
        snippets: res.data,
        todo:''
      })
    }.bind(this))
  }
  handleDeleteSnippet(snippet){
    SnippetModel.deleteSnippet(snippet.id).then(function(res){
      this.setState({
        snippets: res.data
      })
    }.bind(this))
  }
  createSnippet(snippet){
    var newSnippet = {body:snippet, completed: false}
    SnippetModel.create(newSnippet).then(function(res){
      this.setState({
        snippets: res.data
      })
    }.bind(this))
  }
  render(){
    return(
      <div className='snippetComponent'>
        <CreateSnippetForm
          onCreateSnippet={this.createSnippet.bind(this)}
          snippet={this.state.todo}
          />
        <Snippets
          snippets={this.state.snippets}
          />

      </div>
    )
  }
}

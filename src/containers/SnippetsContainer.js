import React, { Component } from 'react';
import Snippets from '../components/Snippets'
import CreateSnippetForm from '../components/CreateSnippetForm';
import SnippetModel from '../models/Snippet';
// import update from 'immutability-helper';

class SnippetsContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      snippets: []
    }
  }
  componentDidMount(){
    console.log("componentDidMount");
    this.fetchData()
  }
  fetchData(){
    SnippetModel.all().then(function(res){
      this.setState ({
        snippets: res.data,
        snippet:''
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
    var newSnippet = { title: snippet.title, code: snippet.code, language: snippet.language }
    SnippetModel.create(newSnippet).then(function(res){
      // Had to concat the res.data so that it was adding to the array
      this.setState({
        snippets: this.state.snippets.concat([res.data])
      })
    }.bind(this))
  }
////////////////////////


  render(){
    return(
      <div className='snippetComponent'>
        <CreateSnippetForm
          createSnippet={this.createSnippet.bind(this)}
          snippet={this.state.snippet}
          />
        <Snippets
          snippets={this.state.snippets}
          />

      </div>
    )
  }
}

export default SnippetsContainer

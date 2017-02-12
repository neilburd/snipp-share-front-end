import React, { Component } from 'react';
import Snippets from '../components/Snippets'
import CreateSnippetForm from '../components/CreateSnippetForm';
import SnippetModel from '../models/Snippet';
// import update from 'immutability-helper';
import 'bootstrap/dist/css/bootstrap.css'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

class SnippetsContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      snippets: [],
      editSnippet: false,
      editSnpippetId: ''

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
  /// Had to use splice to remove the correct snippet from the array
  handleDeleteSnippet(snippet){
    let allSnippets = this.state.snippets
    let index = allSnippets.indexOf(snippet)
    SnippetModel.deleteSnippet(snippet).then(function(res){
      allSnippets.splice(index, 1);
      this.setState({
        snippets: allSnippets
      })
    }.bind(this))
  }
  // Had to concat the res.data so that it was adding to the array
  createSnippet(snippet){
    var newSnippet = { title: snippet.title, code: snippet.code, language: snippet.language }
    SnippetModel.create(newSnippet).then(function(res){
      this.setState({
        snippets: this.state.snippets.concat([res.data])
      })
    }.bind(this))
  }

  /// Must fix getting this to work on first click.
  handleUpdateSnippet(snippet){
      var snippetId = snippet.id
      this.setState({
        editSnpippetId: snippet.id
      })
    }
    //   TodoModel.update(todoId, todoBody).then(function(res){
    //     this.setState({
    //       editingTodoId: null,
    //       editing: null
    //     })
    //   }.bind(this))
    // }
    // updateEditState(todo){
    //   this.setState({
    //     editingTodoId: todo.id
    //   })

  render(){

    return(
      <Grid>
        <Row>
          <Col xs={12} md={8} >
            <h2>New Snippet</h2>
            <Panel>
              <CreateSnippetForm
                createSnippet={this.createSnippet.bind(this)}
                snippet={this.state.snippet}
                />
            </Panel>
          </Col>

          <Col xs={12} md={4} >
            <Snippets
              snippets={this.state.snippets}
              onDeleteSnippet={this.handleDeleteSnippet.bind(this)}
              onEditSnippet={this.handleUpdateSnippet.bind(this)}
              />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default SnippetsContainer

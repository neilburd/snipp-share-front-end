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
    let allSnippets = this.state.snippets
    let index = allSnippets.indexOf(snippet)
    // console.log(index);
    SnippetModel.deleteSnippet(snippet).then(function(res){
      console.log(res.data);
      console.log(this.state.snippets);
      allSnippets.splice(index, 1);
      this.setState({
        snippets: allSnippets
      })
      console.log(this.state.snippets);
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

          <Col xs={6} md={4} >
            <Snippets
              snippets={this.state.snippets}
              onDeleteSnippet={this.handleDeleteSnippet.bind(this)}
              />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default SnippetsContainer

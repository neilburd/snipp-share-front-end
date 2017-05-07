import React, { Component } from 'react';
import Snippets from '../components/Snippets'
import CreateSnippetForm from '../components/CreateSnippetForm';
import SnippetList from '../components/SnippetList'

// import EditSnippetForm from '../components/EditSnippetForm';
import SnippetModel from '../models/Snippet';
import 'bootstrap/dist/css/bootstrap.css'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

class SnippetsContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      snippets: [],
      sortedSnippets: [],
      sortLang: 'all'

    }
  }
  componentDidMount(){
    console.log("componentDidMount");
    this.fetchData()

  }

  fetchData(){
    SnippetModel.all().then(function(res){
      this.setState({
        snippets: res.data,
        snippet:''
      })
    }.bind(this))
  }
  /// Had to use splice to remove the correct snippet from the array
  deleteSnippet(snippet){
    console.log(snippet);
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

  editThisSnippet(newValue, snippet){
    let allSnippets = this.state.snippets
    let index = this.state.snippets.indexOf(snippet);
    allSnippets[index].code = newValue;
    // console.log("ALLSNIPPETS INDEX Code AFTER >>>>",allSnippets[index]);
    this.setState({
      snippets: allSnippets
    })
    // console.log(this.state.snippets[index].code)
  }
  /// Must fix getting this to work on first click.
  updateSnippet(snippet, editValue){
    /// this is where I will put the Update function?
    if (this.state.editSnippet === true){
      console.log('update');
      SnippetModel.update(snippet).then(function(res){
        this.setState({

        })
      }.bind(this))
    }

    ///this will change the editSnippet from true to false
    let editSnippet = this.state.editSnippet
    this.setState({
      editSnippet: !editSnippet
    })
  }

  //sort snippets function
  sortSnippets(lang){
    // console.log('this snippet is written in', this.state.snippet.language)
    // console.log(lang)

    let language = lang
    let sortedSnippets = []

    this.state.snippets.map(function(snippet, index){
      if(snippet.language === language){
        sortedSnippets.unshift(snippet)
      }
      else {
        sortedSnippets.push(snippet)
      }
    });


    this.setState({
      snippets: sortedSnippets
    })
    this.setState({
      sortLang: lang
    })
  }

  render(){
    let title = "new-snippet"
    return(
      <Grid>
        <Row>
          <Col xs={12} md={12} >
            <h2 className="title monospace">{title}</h2>
            <Panel>
              <CreateSnippetForm
                createSnippet={this.createSnippet.bind(this)}
                snippets={this.state.snippets}
                />
            </Panel>
          </Col>
          {/*lists all the languages*/}
          <SnippetList
            sortLang={this.state.sortLang}
            sortSnippets={this.sortSnippets.bind(this)}
            />
          <Col xs={12} md={12} >
            {/* updateSnippet makes changes to the state of editSnippet to change editing mode
                editThisSnippet changes the state of the snippet I'm editing */}
            <Snippets
              snippets={this.state.snippets}
              onDeleteSnippet={this.deleteSnippet.bind(this)}

              updateSnippet={this.updateSnippet.bind(this)}

              editThisSnippet={this.editThisSnippet.bind(this)}

              editSnippet={this.state.editSnippet}
              />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default SnippetsContainer

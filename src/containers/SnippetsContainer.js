import React, { Component } from 'react';
import Snippets from '../components/Snippets'
import CreateSnippetForm from '../components/CreateSnippetForm';
import update from 'immutability-helper';

// import EditSnippetForm from '../components/EditSnippetForm';
import SnippetModel from '../models/Snippet';
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
    //let allSnippets = this.state.snippets
    let index = this.state.snippets.indexOf(snippet);
      console.log(snippet);
      console.log(index);
      console.log(newValue);

    this.setState({
      snippets: update(this.state.snippets[index], {
        code: { $set: newValue }
      })
    })
    console.log(this.state.snippets[index].code)
  }

  
  /// Must fix getting this to work on first click.
  updateSnippet(snippet, editValue){
    console.log(snippet);
    console.log(editValue);
    /// this is where I will put the Update function?
    if (this.state.editSnippet === true){
      console.log('update');
      SnippetModel.update(snippet).then(function(res){
        console.log(res.data);
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

  render(){
    let title = "new-snippet"
    // if (this.state.editSnippet === true){
    //   return(
    //     <Grid>
    //       <Row>
    //         <Col xs={12} md={8} >
    //           <h2>Edit Snippet</h2>
    //           <Panel>
    //             <EditSnippetForm
    //               editSnippet={this.editSnippet.bind(this)}
    //               snippetId={this.state.editSnippetId}
    //               snippet={this.state.snippets.editSnippetId}
    //               />
    //           </Panel>
    //         </Col>
    //
    //         <Col xs={12} md={4} >
    //           <Snippets
    //             snippets={this.state.snippets}
    //             onDeleteSnippet={this.handleDeleteSnippet.bind(this)}
    //             onEditSnippet={this.handleUpdateSnippet.bind(this)}
    //             />
    //         </Col>
    //       </Row>
    //     </Grid>
    //   )
    // }
    return(
      <Grid>
        <Row>
          <Col xs={12} md={12} >
            <h2 className="title monospace">{title}</h2>
            <Panel>
              <CreateSnippetForm
                createSnippet={this.createSnippet.bind(this)}
                snippet={this.state.snippet}
                />
            </Panel>
          </Col>

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

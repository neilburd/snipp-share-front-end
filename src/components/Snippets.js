import React, {Component} from 'react'
import Snippet from './Snippet'
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
//import Button from 'react-bootstrap/lib/Button';

class Snippets extends Component {
  constructor(){
    super()
    this.state = {
      sortLang: "all"
    }
  }

  render(){
    // let sortSnippets = this.props.snippets.forEach(sortedSnippets(this.state.sortLang));
    let title = "{all-snippets}";
    // let allTheSnippets = this.props.snippets;
    // let sortedSnippets = allTheSnippets.forEach(function(snippet, sortLang) {
    //   if (sortLang === lang) {
    //     console.log(snippet);
    //   }
    // })
    var allSnippets = this.props.snippets.map(function(snippet, index){
      return(
          <Col sm={12} md={4}  key={snippet.id}>
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
          </Col>
      )
    // }
  },this)
    return(

        <div>
          <Row>
            <Col sm={12} md={12}>
              <h2 className="title monospace">{title}</h2>
            </Col>
            <Col sm={12} md={6} className="marginBottom">
              <form onSubmit={e => this.sortSnippets(e)}>
              <FormGroup>
                <ControlLabel className="title">Sort by a Language </ControlLabel>
                <FormControl
                   componentClass='select'
                   name='language'
                   onChange={e => this.sortSnippets(e)}
                   value={this.state.sortLang}
                   >
                     <option value="all">All Snippets</option>
                     <option value="javascript">javascript</option>
                     <option value="ruby">ruby</option>
                     <option value="markdown">markdown</option>
                     <option value="xml">xml</option>
                     <option value="python">python</option>
                     <option value="css">css</option>
                     <option value="coffeescript">coffeescript</option>
                     <option value="jsx">jsx</option>
                     <option value="php">php</option>
                     <option value="sass">sass</option>
                     <option value="vue">vue</option>
                 </FormControl>

                 </FormGroup>
               </form>
              </Col>
            </Row>
          { allSnippets }
        </div>
    )
  }
}

export default Snippets

import React, {Component} from 'react'
import Snippet from './Snippet'
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

// import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Snippets extends Component {
  constructor(){
    super()
    this.state = {
      sortLang: "all"
    }
  }

  sortSnippets(event){
    // let sorted = this.props.snippets.filter(filterSnippets(event.target.value));
    console.log(this.state.sortLang);
    console.log(event.target.value);

    /* Can't figure out why this is getting set the the previous value */
    this.setState({
      sortLang: event.target.value
    })

    console.log(this.state.sortLang);
  }

  render(){
    let title = "{all-snippets}";
  //  let sortedSnippets = this.props.snippets.filter(filterSnippets())
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

  },this)
    return(

        <div>
          <Row>
            <Col sm={12} md={12}>
              <h2 className="title monospace">{title}</h2>
            </Col>
            <Col sm={12} md={6} className="marginBottom">
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
              </Col>
            </Row>
          {allSnippets}
        </div>



    )
  }
}

export default Snippets

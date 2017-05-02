import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class SnippetList extends Component {
  constructor(){
    super()
    this.state = {
      sortLang: 'all'
    };
  }

  render(){
    return(
      <div>
        <Row>
          <Col sm={12} md={6} className="marginBottom">
            <form onSubmit={e => this.sortSnippets(e)}>
            <FormGroup>
              <ControlLabel className="title">Sort by Language </ControlLabel>
              <FormControl
                 componentClass='select'
                 name='language'
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
        </div>
    )
  }
}
export default SnippetList

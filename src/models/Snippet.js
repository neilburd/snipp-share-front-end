import axios from 'axios'

class SnippetModel {
  static all(){
    let request = axios.get("https://intense-plains-13482.herokuapp.com/snippets")
    return request
  }
  static create(snippet) {
    let request = axios.post("https://intense-plains-13482.herokuapp.com/snippets", snippet)
    return request
  }
  static deleteSnippet(snippet){
    let request = axios.delete(`https://intense-plains-13482.herokuapp.com/snippets/${snippet.id}`)
    return request
  }
    static update(snippet){
      let request = axios.put(`https://intense-plains-13482.herokuapp.com/snippets/${snippet.id}`, {code: snippet.code})
      return request
    }
  }

  export default SnippetModel

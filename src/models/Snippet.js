import axios from 'axios'

//let URL = "http://localhost:3000"
let URL = "https://intense-plains-13482.herokuapp.com"

class SnippetModel {

  static all(){
    let request = axios.get(`${URL}/snippets`)
    return request
  }
  static create(snippet) {
    let request = axios.post(`${URL}/snippets`, snippet)
    return request
  }
  static deleteSnippet(snippet){
    let request = axios.delete(`${URL}/snippets/${snippet.id}`)
    return request
  }
    static update(snippet){
      let request = axios.put(`${URL}/snippets/${snippet.id}`, {code: snippet.code})
      return request
    }
  }

  export default SnippetModel

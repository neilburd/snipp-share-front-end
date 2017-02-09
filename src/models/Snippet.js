import axios from 'axios'

class SnippetModel {
  static all(){
    let request = axios.get("http://localhost:3000/snippets")
    return request
  }
  static create(snippet) {
    let request = axios.post("http://localhost:3000/snippets", snippet)
    return request
    }
    static delete(snippet){
    let request = axios.delete(`http://localhost:3000/snippets/${snippet.id}`)
    return request
    }
    static update(snippet){
      let request = axios.put(`http://localhost:3000/snippets/${snippet.id}`, {code: todo.code})
      return request
    }
  }

  export default SnippetModel

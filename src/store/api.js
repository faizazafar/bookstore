
import axios from "axios";
const instance = axios.create({

    // base:"https://jsonplaceholder.typicode.com",
    baseURL: 'http://localhost:5000',

    headers :{
        "Access-Control-Allow-Origin": "*"
    }

})

export function getPosts() {

    return instance.get('https://jsonplaceholder.typicode.com/posts')

}
export function getComments() {

    return instance.get('/comments')

}
export function getUsers() {

    return instance.get('/users')

}
export function getBooks(){
    return instance.get('/books')
  }
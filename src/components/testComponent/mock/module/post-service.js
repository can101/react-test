// const axios = require('axios');
// const axios = require('axios');

const getPosts = () => {
    // return axios.get("https://jsonplaceholder.typicode.com/todos").then((resp) => resp.data);
    return fetch("https://jsonplaceholder.typicode.com/todos").then((resp) => resp.data);
}

const getPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((resp) => resp.data);
    // return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((resp) => resp.data);
}

const postService = {
    getPost, getPosts
}

export default postService;
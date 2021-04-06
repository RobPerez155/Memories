import axios from 'axios' // This will be used to make our API calls

const url = 'http://localhost:5000/posts' // This url is pointing to our backend route

export const fetchPosts = () => axios.get(url) // All actions to our backend will be using redux
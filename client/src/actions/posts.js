import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api/index.js' // This means we import everything from the actions as an API

// Action Creators - functions that return action
// An action is just an object that has a type and a payload
// Using Redux Thunk-> ' async (dispatch) => ' & ' dispatch(action) ' 
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts() // Here we will destructure the data and fetch all the data in the api 
    // const { data } is similar to the Response of our fetch call
    dispatch({ type: FETCH_ALL, payload: data }) // this is our action
    // Ultimately we are passing/dispatching from the data from our backend 
  } catch (e) {
    console.log(e.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post) //{data} is the destructured data from our response - basically we are making an API request into a Post API request to our backend server
    dispatch({ type: CREATE, payload: data })
  } catch (e) {
    console.log(e)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post) // { data } - here we destructure our data

    dispatch({ type: UPDATE, payload: data })
  } catch (e) {
    console.log(e)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id })
  } catch (e) {
    console.log(e)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: UPDATE, payload: data })
  } catch (e) {
    console.log(e)
  }
}
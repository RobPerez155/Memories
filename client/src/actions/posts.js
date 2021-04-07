import * as api from '../api' // This means we import everything from the actions as an API

// Action Creators - functions that return action
// An action is just an object that has a type and a payload
// Using Redux Thunk-> ' async (dispatch) => ' & ' dispatch(action) ' 
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts() // Here we will destructure the data and fetch all the data in the api 
    // const { data } is similar to the Response of our fetch call
    dispatch({ type: 'FETCH_ALL', payload: data }) // this is our action
    // Ultimately we are passing/dispatching from the data from our backend 
  } catch (e) {
    console.log(e.message)
  }
}
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'
// a reducer is a function that accepts the 'state' and the 'action'
// Here we are renaming 'state' to 'posts' because we are in the posts reducer

// const reducer = (state = [], action) => { // Since are not using this function we will directly export it
// if(action.type === 'CREATE') { 
  //   return 
  // } // This layout can work, but usually there will be multiple if statements, so to keep clean most people will use a switch statement, like the one below

  export default (posts = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case CREATE:
        return [...posts, action.payload];
      case UPDATE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case DELETE:
        return posts.filter((post) => post._id !== action.payload);
      default:
        return posts;
    }
  };

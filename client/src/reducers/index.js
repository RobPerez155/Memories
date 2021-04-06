import { combineReducers } from 'redux'

import posts from './posts'

export default combineReducers({ posts })
  // key value pair -> posts: posts <- Below we use the ES6 shorthand
  // posts here refers to our posts from ./reducer/posts.js
import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  }, 
  createdAt: {
    type: Date,
    default: new Date()
  },
})

const PostMessage = mongoose.model('PostMessage', postSchema) // Here we turn our schema into a model

export default PostMessage // We are exporting a mongoose model from this postMessage file
// Handlers for all of our routes
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()

    res.status(200).json(postMessages).re //.json will return an array of all messages that we have
  } catch (e) {
    res.status(404).json({ message: e.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new PostMessage(post)

  try {
    await newPost.save

    res.status(201).json(newPost)
  } catch (e) {
    res.status(409).json({ message: e.message })
  }
}
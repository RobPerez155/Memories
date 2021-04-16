// Mods and Libraries
import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64' // Using this will upload photos as a string
import { useDispatch } from 'react-redux'

// My created Folders
import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

// GET THE CURRENT ID for the post that we are on

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message:'', tags: '', selectedFile: ''})
  
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const handleSubmit = (event) => {
    event.preventDefault() // Stops our browser from refreshing onSubmit

    if(currentId) { // Checks to see if currentId is not null
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
  }
  
  const clear = () => {
    
  }
  
  // <Paper> functions like a Div  
  return(
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Memory</Typography>

          <TextField 
          name='creator' 
          variant='outlined' 
          label='Creator' 
          fullWidth 
          value={postData.creator} 
          onChange={(event) => setPostData({ ...postData, creator: event.target.value })} 
          /> 

          <TextField 
          name='title' 
          variant='outlined' 
          label='Title' 
          fullWidth 
          value={postData.title} 
          onChange={(event) => setPostData({ ...postData, title: event.target.value })} 
          /> 

          <TextField 
          name='message' 
          variant='outlined' 
          label='Message' 
          fullWidth 
          value={postData.message} 
          onChange={(event) => setPostData({ ...postData, message: event.target.value })} 
          /> 

          <TextField 
          name='tags' 
          variant='outlined' 
          label='Tags' 
          fullWidth 
          value={postData.tags} 
          onChange={(event) => setPostData({ ...postData, tags: event.target.value })} 
          /> 

          <div className={classes.fileInput}>
            <FileBase
              type = 'file'
              multiple = {false}
              onDone = {(base64) => setPostData({ ...postData, selectedFile: base64})}
            />
          </div>

          <Button className={ classes.buttonSubmit } variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>

          <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
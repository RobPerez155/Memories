import express from 'express'
import bodyParser from 'body-parser' // Parse incoming request bodies in a middleware before the handlers
import mongoose from 'mongoose'
import cors from 'cors' // Allows AJAX requests to skip the Same-origin policy and access resources from remote hosts

const app = express() // Here we initialize the app first

// Setting up bodyParser so we can properly send a request  
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.qgo54.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

// Here we will connect to our Mongoose database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`))
  ).catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false) // This and useUnifiedTopology, makes sure there's no warning in the console
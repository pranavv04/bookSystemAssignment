const express = require('express')
const app = express()
const db = require('./mongodb/db')
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json())

//server port
const PORT = process.env.PORT || 3000;

//to check if server running or not
app.get('/' , (req,res) =>{
    res.send("Server is running perfectly")
})

//user routes
const userRoutes = require('./routes/userRoutes')
app.use('/user',userRoutes)

//book routes
const booksRoutes = require('./routes/bookRoutes')
app.use('/books' , booksRoutes)

//review routes
const reviewRoutes = require('./routes/reviewRoutes')
app.use('/reviews' , reviewRoutes)


app.listen(PORT, ()=> console.log("Server started"))
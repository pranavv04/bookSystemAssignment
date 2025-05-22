const mongoose = require('mongoose')

require('dotenv').config();
//mongoDb connection url
const mongoURL = process.env.MONGODB_URL_LOCAL

//connects to the mongoDB database
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//stores current database connection in a variable called db
const db = mongoose.connection;

//runs functions to check whether db connected or disconnected or throwing error
db.on('connected' , ()=>{
    console.log('Database successfully connected')
})

db.on('disconnected' , ()=>{
    console.log('Database disconnected')
})

db.on('error' , (error)=>{
    console.log('Database connection error' , error)
})


module.exports = db;
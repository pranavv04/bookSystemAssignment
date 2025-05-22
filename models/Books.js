const mongoose = require('mongoose')
//book model
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
})

const Books = mongoose.model('Books' , bookSchema);
module.exports = Books;
const mongoose = require('mongoose')
//review model
const reviewSchema = new mongoose.Schema({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Books',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    comment:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review
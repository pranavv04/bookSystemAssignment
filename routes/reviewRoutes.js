const express = require('express')
const router =express.Router()
const Review = require('../models/Review')

//add review
router.post('/addreview' , async(req,res)=>{
    try {
        const data = req.body
        const newReview = new Review(data)
        const response = await newReview.save()
        console.log("New review added")
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

//get all reviews
router.get('/' , async(req,res)=>{
    try {
        const data =await  Review.find()
        console.log("Reviews fetched")
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

//get review by id
router.get('/:id' , async(req,res)=>{
  try {
    const reviewId = req.params.id;
    if(reviewId){
        const response = await Review.findById(reviewId);
        if(!response){
            return res.status(404).json({error: "Review not found"})
        }
        console.log("Review fetched")
        res.status(200).json(response)
    }else{
        res.status(404).json({error: "Invalid ID"})
    }
  } catch (error) {
      console.log(error)
        res.status(500).json({message:"Internal server error"})
  }
})

//update review
router.put('/:id' , async(req,res)=>{
    try {
        const reviewId = req.params.id;
        const updateReview = req.body
        const response = await Review.findByIdAndUpdate(reviewId, updateReview,{
            new:true,
            runValidators:true
        });
        if(!response){
            return res.status(404).json({error: "Failed to update review"})
        }
        console.log("Review updated")
        res.status(200).json(response)
    } catch (error) {
          console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

// delete review
router.delete('/:id' , async(req,res)=>{
    try {
        const reviewId = req.params.id;
        const response = Books.findByIdAndDelete(reviewId);
        if(!response) res.status(404).json({message: "Failed to delete review "})
        console.log('Review deleted')
        res.status(200).json({message: 'Review deleted successfully'})
    } catch (error) {
          console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = router;
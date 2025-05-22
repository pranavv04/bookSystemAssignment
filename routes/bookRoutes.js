const express = require('express')
const router = express.Router();
const Books = require('../models/Books')

//adding new book
router.post('/addbook', async(req,res)=>{
    try {
        const data = req.body
        const newBook = new Books(data)
        const response = await newBook.save()
        console.log("New Book added")
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
} )

//get all the books
router.get('/' , async(req,res)=>{
    try {
        const data = await Books.find();
        console.log("Books data fetched")
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
        
    }
})

//search books and author (partial and case insensitive)
router.get('/search', async (req, res) => {
    try {
        const { title, author } = req.query;
        const query = {};

        if (title) {
            query.title = { $regex: title, $options: 'i' }; 
        }

        if (author) {
            query.author = { $regex: author, $options: 'i' }; 
        }

        const results = await Books.find(query);

        if (results.length === 0) {
            return res.status(404).json({ message: "No matching books found" });
        }

        console.log("Search results fetched");
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});



//get book by id
router.get('/:id' ,async(req,res)=>{
    try {
        const bookId = req.params.id;
        if(bookId){
            const response = await Books.findById(bookId);
            if(!response){
                return res.status(404).json({error: "Book not found"})
            }
            console.log('Book data fetched')
            res.status(200).json(response)
        }else{
            res.status(404).json({error: "Invalid ID"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})

//update book
router.put('/:id' , async(req,res)=>{
    try {
        const bookId = req.params.id;
        const updateBook = req.body
        const response = await Books.findByIdAndUpdate(bookId,updateBook,{
            new:true,
            runValidators:true
        });
        if(!response){
            return res.status(404).json({error: "Failed to update Book data"})
        }
        console.log("Book updated")
        res.status(200).json(response);
    } catch (error) {
         console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})

//delete book
router.delete('/:id' , async(req,res)=>{
    try {
        const bookId = req.params.id;
        const response = Books.findByIdAndDelete(bookId);
        if(!response) res.status(404).json({message: "Failed to delete Book "})
        console.log('Book deleted')
        res.status(200).json({message: 'Book deleted successfully'})
    } catch (error) {
          console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = router;
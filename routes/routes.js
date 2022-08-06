const express = require('express');

const router = express.Router()

const user = require('../model/users');   
const post=require('../model/posts'); 
const comment =require('../model/comments'); 

module.exports = router;
/**writing endpoints */
//Post Method
router.post('/user', async (req, res) => {
    const data = new user({
        name: req.body.name,
        email: req.body.email
    })
    try{
        /**saving the data using datasave() then we are storing the data in const called datatosave  */
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})


    }
})

//Get all Method
router.get('/user', async(req, res) => {
    try{
        const data = await user.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
})

//Get by ID Method
router.get('/user/:id', async (req, res) => {
    try{
        const data = await user.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await user.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/user/:id',async (req, res) => {
    try {
        const id = req.params.id;
        const data = await user.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }    

})
/******************************************************methode pour posts */
//Post Method
router.post('/posts', async (req, res) => {
    const data = new post({
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId
    })
    try{
        /**saving the data using datasave() then we are storing the data in const called datatosave  */
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})


    }
})

//Get all Method
router.get('/posts', async(req, res) => {
    try{
        const data = await post.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
})

//Get by ID Method
router.get('/post/:id', async (req, res) => {
    try{
        const data = await post.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/posts/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await post.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/posts/:id',async (req, res) => {
    try {
        const id = req.params.id;
        const data = await post.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }    

})
/*********************************comments*/
//Post Method
router.post('/comment', async (req, res) => {
    const data = new comment({
        name: req.body.name,
        body: req.body.body,
        postId: req.body.postId
    })
    try{
        /**saving the data using datasave() then we are storing the data in const called datatosave  */
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})


    }
})

//Get all Method
router.get('/comment', async(req, res) => {
    try{
        const data = await comment.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
})
//Get by ID Method
router.get('/post/:id', async (req, res) => {
    try{
        const data = await user.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


const express = require("express");
const router=express.Router()
var fetchuser=require('../middleware/fetchuser');
const Note = require('../models/Note');
const {body, validationResult }=require('express-validator');

//ROUTER 01: FETCH ALL NOTES
router.get('/fetchallnote', fetchuser, async(req,res)=>{
    try {
    const note=await Note.find({user: req.user.id});  
    res.json(note)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occur");  
    }
    

})
//ROUTER 02: ADD A NEW NOTES
router.post('/addnote', fetchuser,[
    body('title','Enter a valid Title').isLength({min: 3}),
    body('description','Enter a 5 description').isLength({ min: 5 }),
] ,async(req,res)=>{
    try {
        const{title,description,tag,}=req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note=new Note({
            title,description,tag,user:req.user.id
    
        })
        const savenote=await note.save();
        res.json(savenote)
         
        res.json(note)
      
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occur");
        
    }
    
})
module.exports= router
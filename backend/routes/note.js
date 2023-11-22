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
         
        //res.json(note)
      
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occur");
        
    }
    
})

//Route 03: Update an existng note under a existing valid user and only to that user /api/note/updatenote
router.put('/updatenote/:id', fetchuser,[
] ,async(req,res)=>{
const {title,description,tag}=req.body;
const newNotes={};    //New notes checked if this things are available
if(title){newNotes.title=title};
if(description){newNotes.description=description};
if(tag){newNotes.tag=tag};


let note=await Note.findById(req.params.id);
if(!note)                 //Check if the user has any notes
{
    return res.status(404).send("Not found")
}

if(note.user.toString()!==req.user.id)    //Check the user is updating his/her notes
{
   return res.status(401).send("Not allowed")
}
note=await Note.findByIdAndUpdate(req.params.id,{$set:newNotes},{new:true})
res.json({note});

})

//Route 04: Delete an existng note under a existing valid user and only to that user /api/note/deletenote
router.delete('/deletenote/:id', fetchuser,[
] ,async(req,res)=>{
const {title,description,tag}=req.body;


//Find the notes to be deleted
let note=await Note.findById(req.params.id);
if(!note)                 //Check if the user has any notes
{
    return res.status(404).send("Not found")
}

if(note.user.toString()!==req.user.id)    //Check the user is updating his/her notes
{
   return res.status(401).send("Not allowed")
}
note=await Note.findByIdAndDelete(req.params.id)
res.json({"Success": "Note has been removed",note:note});

})



module.exports= router
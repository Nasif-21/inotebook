const express = require("express");
const router=express.Router()
const User = require('../models/User');
const {body, validationResult }=require('express-validator');
const bcrypt = require('bcryptjs');
const JWT_SECRET='Nasif@goodBoY'; //Web token 
var jwt =require('jsonwebtoken');
//Create an User : POST:"/api/auth/."

router.post('/createuser',[
    body('name','Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password','Enter a 5 char password').isLength({ min: 5 }),

],async (req,res)=>{
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check if the user with  email is exist already
    try{
    let user=await User.findOne({email:req.body.email});
    if (user){
      return res.status(400).json({error:"User with email already exist"})
    }

    const salt=await bcrypt.genSalt(10);   //Creating a salt
    const  secPas=await bcrypt.hash(req.body.password,salt);
    user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPas,
      })
    const data={
    user:{
      id:user.id
    }
    }
    const authtoken =jwt.sign(data,JWT_SECRET);
      res.json({authtoken})
    }catch(error)
    {
      console.error(error.message);
      res.status(500).send("Internal error occur");
    }
})

//Authentication using POST
router.post('/login',[
  body('email', 'Enter a valid email').isEmail(),
  body('password','Password cannot be blank').exists(),  //If password is empty, it will not run

],async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password}=req.body;

  //If they don't find user, they won't bother to send in server side
  try{
  let user=await User.findOne({email});
  if(!user)
  {
    return res.status(400).json({error:"Please give correct crendantials"});
  }
  const passwordCompare=await bcrypt.compare(password,user.password);  //Checking password of existing  with given password from the user 
  if(!passwordCompare)
  {
    return res.status(400).json({error:"Please give correct crendantials"});
  }
  
    const data={
      user:{
        id:user.id
      }
      }
      const authtoken =jwt.sign(data,JWT_SECRET);
      res.json({authtoken})
  

  }
  catch(error){
 console.error(error.message);
 res.status(500).send("Internal error occur");
  }
  
})
module.exports= router
const express = require("express");
const router=express.Router()

router.get('/',(req,res)=>{
    obj={
        a:'How',
        number:21
    }
    res.json(obj)

})
module.exports= router
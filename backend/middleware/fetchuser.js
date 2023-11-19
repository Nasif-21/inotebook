var jwt =require('jsonwebtoken');
const JWT_SECRET='Nasif@goodBoY';
const fetchuser =(req,res,next)=>
{
    //Get user from the jwt token and add id to req object

const token= req.header('auth-token'); //Take token form header 
if(!token)
{
    res.status(401).send({error:"Please authenticate with a valid ID"})
}
try {
    const data= jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();
    
} catch (error) {
    res.status(401).send({error:"Please authenticate with a valid ID"})
}

}




module.exports=fetchuser;
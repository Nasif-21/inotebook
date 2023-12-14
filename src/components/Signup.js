import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"",email:"" , password: "",cpassword:""})
  const navigate = useNavigate();
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDU3MDhhYzBhM2YyNTgxZDJlMzM5In0sImlhdCI6MTcwMDM3MTUxOX0._ABetQb1s2mdL7rLTnxwcDULdJQGIYn75LlyBSF5S3Y"
      
      },
      body: JSON.stringify({name,email,password}), 
    });
    const json=await response.json()
    console.log(json);
    localStorage.setItem('token',json.authtoken);
    if(json.SUCCESS){
      localStorage.setItem('token',json.authtoken);
      navigate("/");
      props.showAlert("Successfully created your account","success")

    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }
    


    
    
  }

  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <h1><i><center>Register yourself</center></i></h1>
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control" name="name" id="name" aria-describedby="emailHelp" onChange={onChange}/>
   </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
   </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name="cpassword" id="cpassword" onChange={onChange} minLength={5} required />
  </div>
  <button type="submit" className="btn btn-primary" onChange={onChange}>Submit</button>
</form>
    </div>
  )
}

export default Signup
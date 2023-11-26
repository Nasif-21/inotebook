import React, { useEffect } from 'react'
import { useContext } from 'react'
//import { useState } from 'react'
import noteContext from '../context/notes/noteContext'



const About=()=> {
    const a=useContext(noteContext);
    useEffect(()=>{
        a.update();

    },[])
  return (
    <div>This is About {a.state.name} and his birthday at {a.state.id}</div>
  )
}

export default About
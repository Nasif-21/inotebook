import React from 'react'
import { useContext } from 'react'
//import { useState } from 'react'
import noteContext from '../context/notes/noteContext'



const About=()=> {
    const a=useContext(noteContext);

  return (
    <div>This is About {a.name} and his birthday at {a.id}</div>
  )
}

export default About
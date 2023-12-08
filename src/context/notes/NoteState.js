//import react from "react";

import { useState } from "react";
import NoteContext from "./noteContext";




const NoteState=(props)=>
{
  const host="http://localhost:5000"

    const notesInitial=[]
    const [notes, setNotes]=useState(notesInitial)
    //Fetching all notes

    const getNote=async ()=>
    {
    //API add
    const response = await fetch(`${host}/api/note/fetchallnote`, {
      method: "GET",
      
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDU3MDhhYzBhM2YyNTgxZDJlMzM5In0sImlhdCI6MTcwMDM3MTUxOX0._ABetQb1s2mdL7rLTnxwcDULdJQGIYn75LlyBSF5S3Y"
      
      }
      
      
    });
    const json=await response.json()
    console.log(json)
    setNotes(json)
  }


    //Add notes
    const addNote=async (title,description,tag)=>
    {
    //API add
     const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDU3MDhhYzBhM2YyNTgxZDJlMzM5In0sImlhdCI6MTcwMDM3MTUxOX0._ABetQb1s2mdL7rLTnxwcDULdJQGIYn75LlyBSF5S3Y"
      
      },
      
      body: JSON.stringify({title,description,tag}), 
    });
    const note=response.json()

    //logical part
  
    setNotes(notes.concat(note))  //Set notes e notes e ja ase, oita ke note e push kore daw
    }

    //Delete notes
    const deleteNote=async (id)=>
    {
    //API Call
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDU3MDhhYzBhM2YyNTgxZDJlMzM5In0sImlhdCI6MTcwMDM3MTUxOX0._ABetQb1s2mdL7rLTnxwcDULdJQGIYn75LlyBSF5S3Y"
      
      },
      
     
    });

    const json= response.json()
    console.log(json)
    
    
    //Logical Argument
      const newNotes=notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }
    //Edit notes
    const editNote=async (id,title,description,tag)=>
    {
      //API call
      
      const response = await fetch(`${host}/api/note/updatenote/${id}`, {
        method: "PUT",
        
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDU3MDhhYzBhM2YyNTgxZDJlMzM5In0sImlhdCI6MTcwMDM3MTUxOX0._ABetQb1s2mdL7rLTnxwcDULdJQGIYn75LlyBSF5S3Y"
        
        },
        
        body: JSON.stringify({title,description,tag}), 
      });

      const json=await response.json()
      
      //We cannot change the react state like this, thats why we are appling some new ideas
      let newNote=JSON.parse(JSON.stringify(notes))
      //Logic to client
      for (let index = 0; index < newNote.length; index++) {
        const element = newNote[index];
        if(element._id===id)
        {
          newNote[index].title=title;
          newNote[index].description=description;
          newNote[index].tag=tag;
          break;
        }
        
      }
      setNotes(newNote);
    }
   
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
            {props.children}
        </NoteContext.Provider>

    )
    }

export default NoteState;
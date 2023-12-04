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
    const json=response.json()

    //Llogical part
    const note={
      "_id": "655c465dbfea1183805193523",
      "user": "65545708ac0a3f2581d2e339",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-11-21T05:55:41.452Z",
      "__v": 0
    };
    setNotes(notes.concat(note))  //Set notes e notes e ja ase, oita ke note e push kore daw
    }

    //Delete notes
    const deleteNote=(id)=>
    {
      const newNotes=notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }
    //Edit notes
    const editNote=async (id,title,description,tag)=>
    {
      //API call
      
      const response = await fetch(`${host}/api/note/updatenote/${id}`, {
        method: "POST",
        
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1NDU3MDhhYzBhM2YyNTgxZDJlMzM5In0sImlhdCI6MTcwMDM3MTUxOX0._ABetQb1s2mdL7rLTnxwcDULdJQGIYn75LlyBSF5S3Y"
        
        },
        
        body: JSON.stringify({title,description,tag}), 
      });

      const json=await response.json()
      


      //Logic to client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id)
        {
          element.title=title;
          element.description=description;
          element.tag=tag;
        }
        
      }
    }
   
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
            {props.children}
        </NoteContext.Provider>

    )
    }

export default NoteState;
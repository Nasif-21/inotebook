//import react from "react";

import { useState } from "react";
import NoteContext from "./noteContext";




const NoteState=(props)=>
{

    const notesInitial=[
        {
          "_id": "6559a72ed8fc0c2d85440036",
          "user": "65545708ac0a3f2581d2e339",
          "title": "Welcome To Chandu's Diary",
          "description": "This is my first diary ",
          "tag": "Test",
          "date": "2023-11-19T06:11:58.628Z",
          "__v": 0
        },
        {
          "_id": "655c4265b0c6b750fd722237",
          "user": "65545708ac0a3f2581d2e339",
          "title": "What a beautiful day",
          "description": "It was a nice view ",
          "tag": "1st one",
          "date": "2023-11-21T05:38:45.063Z",
          "__v": 0
        },
        {
          "_id": "655c43d68c850e846b5de72d",
          "user": "65545708ac0a3f2581d2e339",
          "title": "Welcome To Chandu's Diary",
          "description": "This is my first diary but this time updated ",
          "tag": "Test",
          "date": "2023-11-21T05:44:54.100Z",
          "__v": 0
        },
        {
          "_id": "655c465dbfea118380519352",
          "user": "65545708ac0a3f2581d2e339",
          "title": "We live we love we lie",
          "description": "update song ",
          "tag": "Alen Walker 0",
          "date": "2023-11-21T05:55:41.452Z",
          "__v": 0
        },
        {
          "_id": "655d84c8a2bea53012c49ce9",
          "user": "65545708ac0a3f2581d2e339",
          "title": "Test Delete",
          "description": "Only for deleting ",
          "tag": "Delete function",
          "date": "2023-11-22T04:34:16.383Z",
          "__v": 0
        }
      ]
    const [notes, setNotes]=useState(notesInitial)
    //Add notes
    const addNote=(title,description,tag)=>
    {
    //API add
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
    const deleteNote=()=>
    {
      
    }
    //Edit notes
    const editNote=()=>
    {
      
    }
   
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;
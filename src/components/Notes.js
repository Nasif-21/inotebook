import React,{useContext, useEffect} from 'react'
import  noteContext  from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes=()=> {
    const context=useContext(noteContext);
    const {notes,getNote}=context;
    useEffect(()=>{
      getNote()
    },[])
  return (
    <>
    <AddNote/>
    <div className="row my-3">
    <h3>Your notes<i class="fa-solid fa-book-open fa-bounce mx-2"></i></h3>
    {notes.map((note)=>{
    return <NoteItem key={note._id} note={note}/>
})}
    </div>
    </>
  )
}

export default Notes
import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote } = context;
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null)
  const updateNote = (note) => { 
    ref.current.click();
  };
 

  return (
    <>
      <AddNote />

     
<button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <div className="row my-3">
        <h3>
          Your notes<i class="fa-solid fa-book-open fa-bounce mx-2"></i>
        </h3>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
      
};


export default Notes;

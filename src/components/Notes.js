import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote } = context;
  const [note, setNote] = useState({etitle:"", edescription:"",etag:"defult"})
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);


  const ref = useRef(null)
  const updateNote = (currentNote) => { 
    ref.current.click();
    setNote({etitle: currentNote.title,edescription:currentNote.description ,etag:currentNote.tag })
  };
  
  const handleClick=(e)=>{
    e.preventDefault();
    console.log("Change occur")
    //addNote(note.title,note.description,note.tag);

}
const onChange=(e)=>{
setNote({...note, [e.target.name]: e.target.value})
}
 

  return (
    <>
      <AddNote />

     
<button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body">
        {/* Write add note form */}

        <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Title</label>
          <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange}/>
        </div>
       
      </form>
      </div>


      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
      </div>

    </div>
  </div>
</div>

      <div className="row my-3">
        <h3>
          Your notes<i className="fa-solid fa-book-open fa-bounce mx-2"></i>
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

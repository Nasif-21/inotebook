import React,{useContext,useState} from 'react'
import  noteContext  from "../context/notes/noteContext";


export const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note, setNote] = useState({title:"", description:"",tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"", description:"",tag:""})

    }
    const onChange=(e)=>{
    setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3" >

     <h1><center>Welcome to iNotebook</center></h1> 
    
    <h2><center><i class="fa-regular fa-hand fa-shake"></i></center></h2>
      <h3>Add your notes<i class="fa-solid fa-file-pen fa-bounce mx-2"></i></h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Title <i class="fa-solid fa-clipboard fa-beat fa-2xs"></i></label>
          <input type="text" className="form-control" value={note.title} id="title" name="title" onChange={onChange} aria-describedby="emailHelp" minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description <i class="fa-solid fa-file-invoice fa-beat fa-2xs"></i></label>
          <input type="text" className="form-control" value={note.description} id="description" name="description" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag <i class="fa-solid fa-tag fa-beat fa-2xs "></i></label>
          <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange} />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
      </div>
  )
}
export default AddNote

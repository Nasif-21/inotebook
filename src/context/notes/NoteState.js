//import react from "react";
import NoteContext from "./noteContext";



const NoteState=(props)=>
{
    const state={
    "name":"Nasif",
    "id":"21"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;
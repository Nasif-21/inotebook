//import react from "react";
import { useState } from "react";
import NoteContext from "./noteContext";



const NoteState=(props)=>
{
    const s1={
    "name":"Nasif",
    "id":"21"
    }
    const [state,setState]=useState(s1);
    const update=()=>
    {
        setTimeout(()=>{
            setState({
                "name":"Sheikh",
                "id":"12"
            })

        },1000)
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;
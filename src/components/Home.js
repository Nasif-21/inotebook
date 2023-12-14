//import React, { useContext } from "react";
//import AddNote from "./AddNote";
import Notes from "./Notes";
import Footbar from "./Footbar";
//import  AddNote  from "./AddNote";



export const Home = (props) => {
  const {showAlert}=props;
  return (
    <div>
      <Notes showAlert={showAlert}/>
      <Footbar/>
    </div>
  );
};

//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import  About  from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Footbar from './components/Footbar';

function App() {
  return (
    
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <Alert message="This is iNoteBook" />
      <div className='container'>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/about"  element={<About/>} /> 
      </Routes>
      </div>
      <Footbar/>
    </BrowserRouter>
    </NoteState>
  
    
    </>
  );
}

export default App;

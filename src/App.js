//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import  About  from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
//import Footbar from './components/Footbar';
import Login from './components/Login';
import Signup from './components/Signup';

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
        <Route path="/login"  element={<Login/>} /> 
        <Route path="/signup"  element={<Signup/>} />  
      </Routes>
      </div>
      
    </BrowserRouter>
    </NoteState>
  
    
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

     <TextForm heading = "Magic Text"/>


function App() {
 
  return (
    <>
   
    <Navbar title = "Magico"/>
    <div className = "container">
    <TextForm />
    </div>
    </>
  );
}

export default App;
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
 
  return (
    <>
   
    <Navbar title = "Magico"/>
    <div className = "container">
     <TextForm heading = "Magic Text"/>
    </div>
    </>
  );
}

export default App;
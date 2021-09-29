import React , {useState}from 'react';
import PropTypes from "prop-types"; 


 export default function TextForm(props) {


const handleUpperCase = () =>{
  console.log("Upper case button Clicked "+ text);

  let resultText = text.toUpperCase();
  setText(resultText);
}
const handleLowerCase = () =>{
  console.log("Lower case button Clicked "+ text);

  let resultText = text.toLowerCase();
  setText(resultText);
}
const handleClearText = () =>{
  console.log("ClearText  button Clicked "+ text);

  let resultText = ""
  setText(resultText);
}
const handleOnChange = (event) =>{
  console.log("OnChange");

  setText(event.target.value);
}

const [text , setText] = useState('Enter Text Here');

  return (
    <>
     <h1>{props.heading}</h1>
    <div className="mb-3">
      <label for = "myBox"  class="form-label">
      {props.title}
      </label>
      <textarea className ="form-control"   onClick={handleOnChange} value={text} id ="myBox" rows = "6"/>
    </div>
    <button className="btn btn-primary" onClick={handleUpperCase} > Convert to Uppercase </button>
    <button className="btn btn-primary mx-3" onClick={handleLowerCase} > Convert to Lowercase </button>
     <button className="btn btn-primary mx-3 my-3" onClick={handleClearText} >Clear Text</button>
      <div className="container my-3">
              <h1>Your Text Summary</h1>
              <p> {text.split(" ").length} Words , {text.length} characters</p>
              <p> {0.005 * text.split(" ").length } minutes read</p>
              <h2 className = "my-3">Preview</h2>
              <p>{text}</p>
       </div>
    </>
  );

}
// Add Types For Properties
TextForm.propTypes =  {
  heading : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired

}


TextForm.defaultProps = {
  heading : "Set heading here",
  title: "This box changes your data into Uppercase. "
}
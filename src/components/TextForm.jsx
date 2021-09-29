import React , {useState}from 'react';
import PropTypes from "prop-types"; 


 export default function TextForm(props) {


const handleUpperCase = () =>{
  console.log("Upper case button Clicked "+ text);

  let resultText = text.toUpperCase();
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
      <textarea className ="form-control"  value={text} id ="myBox" rows = "6"onClick={handleOnChange}/>
    </div>
    <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
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
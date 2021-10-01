import React ,{useState} from 'react';
import PropTypes from "prop-types"; 


 export default function About(props) {

const [darkModeStyle , setdarkModeStyle] = useState({
 
    color : '#000',
    backgroundColor: "#fff"
})
const [buttonText,setButtonText] = useState("Enable Dark Mode")
const toggleState =  () => {
  if(darkModeStyle.color == '#000'){
    setdarkModeStyle({
       color : '#efe',
  backgroundColor: "#000000"
    })
    setButtonText("Enable Light Mode")
  }else{
 setdarkModeStyle({
        color : '#efe',
    backgroundColor: "#000000"
    })
     setButtonText("Enable Dark Mode")
  }
}
  return (
     <>
     <div className="container"style ={darkModeStyle}>
     <div className="container" style ={darkModeStyle}>
     <h1 >About us </h1>
     <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{buttonText}</label>
</div>
</div>
      <div className="accordion" id="accordionExample"style ={darkModeStyle}>
  <div className="accordion-item"style ={darkModeStyle}>
    <h2 className="accordion-header" id="headingOne"style ={darkModeStyle}>
      <button className="accordion-button" type="button" style ={darkModeStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onSwitch={toggleState}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"style ={darkModeStyle}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style ={darkModeStyle}>
    <h2 className="accordion-header" id="headingTwo"style ={darkModeStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style ={darkModeStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style ={darkModeStyle}aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style ={darkModeStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree"style ={darkModeStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style ={darkModeStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"style ={darkModeStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style ={darkModeStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
     </>
  );

}
// Add Types For Properties
About.propTypes =  {
  title : PropTypes.string.isRequired

}


About.defaultProps = {
  title : "Set Title here"
}
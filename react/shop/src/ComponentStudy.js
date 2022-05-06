import PropTypes from 'prop-types';
import logo from "./logo.svg";
import React, { Fragment, useState, useRef } from "react";
import "./App.css";

// const Greeting = (props) => {
//   // return <p>Hello {props.name}, {props.age} years old {props.occupation}</p>
//   return <p>Hello! I'm {props.name}, a {props.age} years old {props.occupation}.Pleased to meet you! {props.children}</p>
  
// }

// Default props
// Greeting.defaultProps = {
//   name: "guest",
//   age: 1,
//   occupation: "free",
// }

// Greeting.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired, 
// }

// function ComponentStudy() {
//   let name = "Lee";
//   let age = 23;
//   let occupation = "back-end";
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Greeting name={name} age={age} occupation={occupation}/> 
//       <Greeting  age={24} occupation={"front-end"}>
//         <h3>this is children</h3> 
//       </Greeting>
//     </div>
//   );
// }



function Greeting(props) {
  let element;
  if (props.text) {
    element = (
      <p>
        Hello! I'm Nathan and I'm a Software Developer. Pleased to meet you!
      </p>
    );
  } else {
    element = (
      <p>Hello! I'm Jane and I'm a Frontend Developer. Pleased to meet you!</p>
    );
  }
  return (
    <div>
      {element}
      <ChangeGreeting handleClick={props.handleClick} />
    </div>
  );
}

function ChangeGreeting(props) {
  return (
    <button type="button" onClick={props.handleClick}>
      Toggle Name
    </button>
  );
}



function ComponentStudy() {
  const [textSwitch, setTextSwitch] = useState(true);
  return (
    <div>
      <Greeting
        text={textSwitch}
        handleClick={() => setTextSwitch(!textSwitch)}
      />
    </div>
  );
}


export default ComponentStudy;

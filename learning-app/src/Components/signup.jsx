import { useState } from "react";
import Button from "./button";
import Input from "./input";
import Counter from "./counter";



function Signup() {
 

  return (
    <div>
      <div className="signup-container">
        <h1>SignUp Form</h1>
        <Input/> 
        <Button />
        <Counter />
      </div>

    </div>
  );
}

export default Signup;
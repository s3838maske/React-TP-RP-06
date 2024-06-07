import { useState } from "react";


function Counter() {
    var [increment, setIncrement] = useState(0);  
  

    function handleIncreaseCount() {
      setIncrement(increment + 1); 
    }
  
    function handleDecreaseCount() {
      if(increment===0){
        alert("Count is Zero!!")
        return
      }
      setIncrement(increment - 1); 
    }
    return (
        
      <div className="counter-container" style={{ borderTop:"1px solid black" , margin:"50px 10px"}}>
      <h1>Counter</h1>
        <button onClick={handleIncreaseCount}  style={{fontSize:"13px", padding:"5px 20px" , borderRadius:"8px", backgroundColor:"black" , color:"white", marginRight:"5px"}}>Increment</button>
        <button onClick={handleDecreaseCount}  style={{fontSize:"13px", padding:"5px 20px" , borderRadius:"8px", backgroundColor:"black" , color:"white"}}>Decrement</button>
        <h2> Count: {increment}</h2> 
      </div>
    );
}

export default Counter ;
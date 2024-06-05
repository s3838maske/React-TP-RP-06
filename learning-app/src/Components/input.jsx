function input() {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
        
        <label for="email" style={{fontSize:"20px"}}>Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Username"  style={{padding:"10px", margin: "15px 0" , borderRadius: "8px"}} required/>
        
        <label for="password" style={{fontSize:"20px"}}>Password</label>
        <input type="password" id="password" name="password" placeholder="Enter Password" style={{padding:"10px", margin: "15px 0" , borderRadius: "8px"}} required/>
        </div>
    );
  }

export default input;

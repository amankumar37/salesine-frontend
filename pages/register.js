import React, { useState } from "react";
import axios from "axios";
function Register() {
       const [name,setName] = useState("");
       const [email,setEmail] = useState("");
       const [password,setPassword] = useState("");
        
       function registerUser(e){
        e.preventDefault();
          axios.post('http://localhost:8000/register',{
            name,email,password
          }).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log("There is an error in registering the user in client side " , err);
          })
       }

  return (
    <div className="App">
          <form method='POST' onSubmit={registerUser}>
              <h1>Register here</h1>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter name" /> <br />
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" /> <br />
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter password" /> <br />
              <input type="submit" />

          </form>

          <h3>Already a User? </h3>
          <button onClick={()=>{
            window.location.href="/login";
          }} >Click to login</button>
    </div>
  );
}

export default Register;

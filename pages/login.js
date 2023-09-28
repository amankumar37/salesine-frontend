import React, { useState } from "react";
import axios from "axios";
import { setLogin,setLogout } from "../src/store";
function Login() {
       const [email,setEmail] = useState("");
       const [password,setPassword] = useState("");
        
         function loginUser(e){
        e.preventDefault();
          axios.post('http://localhost:8000/login',{
            email,password
          }).then((res)=>{
                const data= res.data;

                if(data.user){
                    alert('Login Successful');
                    localStorage.setItem('token',data.user);
                    window.location.href='/dashboard'
                    
                }else{
                  alert('Invalid combination of email and password');
                }
          }).catch((err)=>{
            console.log("There is an error in registering the user in client side " , err);
          })
       }

  return (
    <div className="App">
          <form method='POST' onSubmit={loginUser}>
              <h1>Login here</h1>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" /> <br />
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter password" /> <br />
              <input type="submit" />

          </form>

          <h3>New User?</h3>
          <button onClick={()=>{
            window.location.href='/register';
          }} >Click to register</button>
    </div>
  );
}

export default Login;

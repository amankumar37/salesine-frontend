import React from "react";
import { useDispatch } from "react-redux";
import { setRegister } from "./store/slice/authSlice";
import axios from "axios";
import { useState } from "react";

function Login(p){

   
        function Set (e){
          p.register(true);
        }
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
         
          function loginUser(e){
            console.log(email,password);
         e.preventDefault();
           axios.post('https://victorious-pink-turkey.cyclic.cloud/login',{
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
        <div  >
        <h1 className=" text-slate-800 text-3xl my-4 " >Enter your details</h1>
        <form className= " my-0.5 flex flex-col" method="POST"> 
               
        <label htmlFor="email" className="my-0.5 text-slate-700 text-xl">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          className="px-3 my-0.5 rounded-xl h-9 font-bold w-96"
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label htmlFor="password" className="my-0.5 text-slate-700 text-xl">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          className="px-3 my-0.5 rounded-xl h-9 font-bold w-96"
          onChange={(e) => setPassword(e.target.value)} 
        />
               
               <button className= "  w-32 my-7 shadow bg-purple-500 hover:bg-purple-400 active:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={loginUser}>
Login
</button>
        </form>

        <h1 className= "  my-5">New user? <span className= " my-0.5 text-purple-700 cursor-pointer font-bold" onClick={Set}>Register</span> </h1>


  </div>
    );
}

export default Login;
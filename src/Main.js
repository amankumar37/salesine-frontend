import React, { useState } from "react";
import Register from "./register";
import Login from "./login";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function Content(){

      const [user,setUser] = useState(null);
      const token = useSelector((state)=> state.token);
      const [register,setRegister] = useState(false);
      
      
     
             return(
                <main className= "  bg-purple-200 flex  ">
                  <div className= "  px-80 my-36 pl-12 w-1/2">
                    
                       <h1 className= "  text-6xl font-bold font-sans text-purple-800">Unlocking Opportunities </h1>
                       <p className= "  text-slate-500 text-xl my-4 ">At TalentConnect, we bridge the gap between employers and exceptional talent, creating meaningful connections that drive success. Our platform offers a seamless experience, unlocking a world of opportunities for job seekers while empowering businesses to find the perfect fit for their teams.</p>

               
                  </div>
                  
                  {
                    register?<Register register = {setRegister} /> : <Login register = {setRegister} />
                  }
                  

                  

            </main>
             )
    
}


export default Content;
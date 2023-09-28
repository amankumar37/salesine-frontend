import React, { useEffect, useState } from "react"
import axios from "axios";
import NavBar from "./Navbar";

function Dashboard(){
    const [quote,setQuote] = useState('');
   
    const [temp,setTemp] = useState('');

    function updateQuote(e){
        e.preventDefault();
        const token = localStorage.getItem('token');

        axios.post('https://victorious-pink-turkey.cyclic.cloud/update',{
            token,temp
        }).then((res)=>{
            setQuote(res.data.quote);
            console.log(res);
        }).catch((err)=>{
            console.log("unable to update client side", err);
        })
        setTemp('');
    }

    function populateQuote(token){

        axios.post('https://victorious-pink-turkey.cyclic.cloud/populate',{
            token
        }).then((res)=>{
            console.log(res);
            setQuote(res.data.quote);
        }).catch((err)=>{
            console.log("unable to authenticate client side", err);
        })
    }

    function LogOut(){
         localStorage.removeItem('token');
         alert('Log Out successfully');
         window.location.href='/';
    }

     useEffect(()=>{
    
            const token = localStorage.getItem('token');
            if(!token){
                window.location.href= '/';
            }else{
                populateQuote(token);
            }
               
         
     },[])



    return(
        <div className="bg-purple-500 text-orange-50 flex justify-center items-center h-screen flex-col">

            {/* <h1> Here's your quote : {quote} </h1>

            <form method="POST" onSubmit={updateQuote}>
                <input type="text" value = {temp}  placeholder="Enter new quote" onChange={(e)=>setTemp(e.target.value)} />
                <input type="submit" />

            </form> */}

            <h1 className="text-7xl">Welcome to you dashboard page {quote}!</h1>

            

            <button className= "  w-32 my-7 shadow bg-purple-700 hover:bg-purple-400 active:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={LogOut}>
Logout
</button>
        </div>
    )
}

export default Dashboard;

